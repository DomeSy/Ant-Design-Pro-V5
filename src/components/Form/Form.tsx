import React, { useRef, useEffect, useMemo } from 'react';
import FormListView from './FormList';
import type { FormInstance } from 'antd';
import ProForm, { ProFormField } from '@ant-design/pro-form';
import { FooterToolbar } from '@ant-design/pro-layout';
import Props, { FormCommonProps } from './interface.d';
import { fromSy } from '@/utils/Setting';

// 输入规则不一定要必填，因为可以不填，如果填了就必须按照规定去填

/**
 * 1. 基本布局 居中响应式，每行一列 栅格 按钮的问题 自定义文本框
 * 9. 样式垂直，formTailLayout无效的问题
 * 3. 日期问题， 没有限制日期时分秒等操作，没并且method应设置两个字段，分别是前几天几月可设置，没有设置选择时间段时的限制
 *
 * // 日期的预设的范围， 日期的选择范围
 * ??自定义问题
 */

/**
 * @module Form表单
 */

const Form: React.FC<Props & FormCommonProps> = ({
  getRef,
  onFinish,
  formList = [],
  footer = false,
  buttonConfig,
  initValues,
  method,
  layout = {},
  _config = {},
  fieldValues=[],
  ...props
}) => {
  const formRef = useRef<FormInstance>();

  useEffect(() => {
    if (getRef) getRef(formRef);
  }, []);

  useMemo(() => {
    if(fieldValues.length !== 0){
      fieldValues.map((item) => {
        let payload: any = {};
        payload[item.name] = item.value;
        formRef?.current?.setFieldsValue(payload);
      })
    }
  }, [fieldValues])

  return (
    <>
      <ProForm
        {...props}
        formRef={formRef}
        onFinish={async (values) => {
          if (onFinish) onFinish(values);
        }}
        initialValues={initValues}
        layout={layout.way ? layout.way : fromSy.layout.way}
        submitter={{
          searchConfig: {
            submitText: buttonConfig?.submitText || fromSy.submitText,
            resetText: buttonConfig?.resetButton || fromSy.resetText,
          },
          onSubmit: () => {
            if (buttonConfig?.onSubmit) buttonConfig.onSubmit();
          },
          onReset: () => {
            if (buttonConfig?.onReset) buttonConfig.onReset();
          },
          render: (props, dom) => {
            if (method === 'none' || method === 'mask') return;
            if (buttonConfig?.render) {
              return buttonConfig.render(props, dom);
            }
            if (buttonConfig?.submitFlag) {
              return dom.pop();
            }
            const position = buttonConfig?.position || 'left';
            let otherRender: any = '';
            if (buttonConfig?.otherRender) {
              otherRender = buttonConfig.otherRender();
            }
            return (
              <>
                {footer ? (
                  <FooterToolbar>
                    {position === 'left' && otherRender}
                    {dom}
                    {position === 'right' && otherRender}
                  </FooterToolbar>
                ) : (
                  <ProFormField
                    labelCol={
                      layout.close
                        ? undefined
                        : layout?.formTailLayout?.labelCol ||
                          fromSy.layout.formItemTailLayout.labelCol
                    }
                    wrapperCol={
                      layout.close
                        ? undefined
                        : layout?.formTailLayout?.wrapperCol ||
                          fromSy.layout.formItemTailLayout.wrapperCol
                    }
                    renderFormItem={() => (
                      <>
                        {position === 'left' && otherRender}
                        {dom}
                        {position === 'right' && otherRender}
                      </>
                    )}
                  ></ProFormField>
                )}
              </>
            );
          },
          submitButtonProps: {
            style: {
              marginLeft: 12,
            },
            ...buttonConfig?.submitButton,
          },
          resetButtonProps: { ...buttonConfig?.resetButton },
        }}
      >
        <FormListView formList={formList} layout={layout} method={method} _config={_config} />
      </ProForm>
    </>
  );
};

export default Form;
