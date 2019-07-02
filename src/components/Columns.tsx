import { ColumnProps } from 'antd/lib/table';
import { defaultColumnProps } from 'racc';
import SearchTableFilter from 'src/components/search-table/table-filters/SearchTableFilter';
import React from 'react';

const getColumns = (state, setState): ColumnProps<any>[] => {
  return [
    {
      ...defaultColumnProps,
      title: '赠品',
      dataIndex: 'unShelves',
      render: (text, row, index) => index + 1,
      filterDropdown: () => (
        <SearchTableFilter
          title="赠品"
          dataIndex="unShelves"
          type="single"
          dataSource={[{ label: 'xx', value: 1 }]}
          setState={setState}
          state={state}
        />
      ),
      onFilterDropdownVisibleChange: open => setState({ open })
    }
  ];
};

export default getColumns;
