/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import SearchTable from 'src/components/search-table';
import getFormData from './components/SearchNode';
import getColumns from './components/TableNode';
import { connect } from 'dva';
import PromotionTableActions from './components/TableActions';
interface Props {}
const DemoManage: React.FC<Props> = props => {
  const {
    dictionaryMap: { brands, itemType }
  } = props;
  const filterData = [
    {
      key: 'brandIds',
      label: '品牌',
      type: 'checkbox',
      dataSource: brands
    },
    {
      key: 'channels',
      label: '经销商渠道',
      type: 'select',
      dataSource: brands
    },
    {
      key: 'itemType',
      label: '商品类型',
      type: 'select',
      dataSource: itemType
    }
  ];
  return (
    <SearchTable
      commonFormProps={{ formData: getFormData() }}
      commonTableProps={{ columns: getColumns() }}
      tabsData={[{ label: 1, value: 1 }]}
      tableAction={<PromotionTableActions />}
      tabKey="xx"
      ajaxProps={{ url: '/', method: 'GET' }}
    />
  );
};
export default connect(({ common }) => ({ ...common }))(DemoManage);
