import React from 'react';
import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import { thothCaApiApiRef } from '../../api';
import { useApi } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';
import { ThothCaSummary } from '@internal/plugin-thoth-ca-common';

type DenseTableProps = {
  summary: ThothCaSummary;
};

export const DenseTable = ({ summary }: DenseTableProps) => {
  const columns: TableColumn[] = [
    { title: 'Area', field: 'area' },
    { title: 'Tier', field: 'tier' },
    { title: 'Check', field: 'check' },
    { title: 'Result', field: 'result' },
  ];

  const data = Object.keys(summary).reduce((areasAcc, area) => {
    const checks = summary[area];
    const flatChecks = Object.keys(checks).reduce((checksAcc, checkKey) => {
      return checksAcc.concat({
        check: checkKey,
        tier: checks[checkKey].tier,
        result: checks[checkKey].value,
      });
    }, [] as { check: string; tier: string; result: boolean }[]);
    return areasAcc.concat(
      flatChecks.map(flatCheck => ({
        area,
        ...flatCheck,
      })),
    );
  }, [] as { area: string; tier: string; check: string; result: boolean }[]);

  return (
    <Table
      title="Continous Auditing"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const CaReportComponent = () => {
  const thothCaApiApi = useApi(thothCaApiApiRef);
  const { value, loading, error } = useAsync(async (): Promise<ThothCaSummary> => {
    return await thothCaApiApi.getThothCaSummaryById('a');
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable summary={value!} />;
};
