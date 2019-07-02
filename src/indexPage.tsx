import { SearchTableState } from 'components/search-table/reducer';
import useSearchTableState from 'components/search-table/useSearchTableFilter';
import PageLayout from 'components/page-layout';
import React from 'react';
import PageExtra from './components/pageExtra';
import SearchTable from 'components/search-table';
import getColumns from './components/Columns';
import TableAction from './components/TableAction';
import SearchAction from './components/SearchAction';

interface Props {}

const getInitState = () => ({
  checkedKeys: [],
});
type InitState = ReturnType<typeof getInitState> & SearchTableState;

const ToBeAcceptRecruit: React.FC<Props> = props => {
  const [state, setState] = useSearchTableState<InitState>(getInitState());
  return (
    <PageLayout title="页面标题" extra={<PageExtra />}>
      <SearchTable
        setFilterParams={filterParams => setState({ filterParams })}
        filterParams={state.filterParams}
        ajxaProps={{ url: '', method: 'GET' }}
        placeholder="请输入"
        title="模块标题"
        description="i am description......."
        tableProps={{
          columns: getColumns(state, setState),
          dataSource: [{ date1: '1' }],
        }}
        checkable={true}
        tableAciton={<TableAction />}
        searchAction={<SearchAction />}
      />
    </PageLayout>
  );
};
export default ToBeAcceptRecruit;
