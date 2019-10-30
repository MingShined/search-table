/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import { Button } from 'antd';
interface Props {}
const TableActions: React.FC<Props> = props => {
  return (
    <Fragment>
      <Button className="mg-r2x">1</Button>
      <Button>2</Button>
    </Fragment>
  );
};
export default TableActions;
