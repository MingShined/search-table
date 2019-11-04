import { ColumnProps } from 'antd/lib/table';
import { customColumnProps } from 'src/components/custom-table/utils';

const getColumns = (): ColumnProps<any>[] => {
  return [
    {
      title: 'xx',
      ...customColumnProps,
      dataIndex: 'xx'
    }
  ];
};

export default getColumns;
