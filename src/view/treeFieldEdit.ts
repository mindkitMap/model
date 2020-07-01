import React from "react";
import {TextInput} from 'react-admin'
const TreeFieldEdit = (props: any) => {
  //NOTE 不支持jsx/tsx， 因为后台编译直接采用tsc，没有经过jsx编译。
  return React.createElement(TextInput, {
    value: props?.record?.[props?.source],
    onChange: props.onChange,
  });
};

export default TreeFieldEdit;
