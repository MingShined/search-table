import React from 'react';
import { FormDataType } from 'racc/dist/common-form/type';
import { Input } from 'antd';

const getFormData = (): FormDataType[] => {
  return [
    { key: 'orderId', label: '', node: <Input placeholder="订单编号" /> }
  ];
};
export default getFormData;
