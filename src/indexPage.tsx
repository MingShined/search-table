/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import SearchTable from 'src/components/search-table';
import getFormData from './components/SearchNode';
import getColumns from './components/TableNode';
import PromotionTableActions from './components/TableActions';
interface Props {}
const PromotionManage: React.FC<Props> = props => {
  return (
    <SearchTable
      commonFormProps={{ formData: getFormData() }}
      commonTableProps={{ columns: getColumns() }}
      tabsData={[{ label: 1, value: 1 }]}
      tableAction={<PromotionTableActions />}
      tabKey="xx"
      ajaxProps={{ url: '/', method: 'GET' }}
    >
      1
    </SearchTable>
  );
};
export default PromotionManage;
