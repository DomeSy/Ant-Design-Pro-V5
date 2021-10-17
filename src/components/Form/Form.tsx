import React, { useRef, useEffect } from 'react';
import FormListView from './FormList';
import type { FormInstance } from 'antd';
import ProForm, { ProFormField } from '@ant-design/pro-form';
import { FooterToolbar } from '@ant-design/pro-layout';
import Props, { FormCommonProps } from './interface.d';
import { fromSy } from '@/utils/Setting';
import { Button } from 'antd';
import { Jump } from '@/utils';

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

  useEffect(() => {
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
            if(fieldValues.length !== 0){
              fieldValues.map((item) => {
                let payload: any = {};
                payload[item.name] = item.value;
                formRef?.current?.setFieldsValue(payload);
              })
            }
          },
          render: (props, dom) => {
            if (method === 'none' || method === 'mask') return;
            if (buttonConfig?.render) {
              return buttonConfig.render(props, dom);
            }
            const position = buttonConfig?.position || 'left';
            let otherRender: any = '';
            if (buttonConfig?.otherRender) {
              otherRender = buttonConfig.otherRender();
            }
            const { noRest, back } = _config

            const buttonDome = noRest ? dom.pop() : dom

            const buttonRender = <>
              {position === 'left' && otherRender}
              {
                back &&
                  <Button
                    type='default'
                    style={{marginRight: 12, ...fromSy.allButtonStyle, ...fromSy.button.backStyle}}
                    onClick={() => Jump.back(typeof back === 'number' ? back : typeof back === 'object' ? back.jump || -1 : -1 )}
                    {...back}
                  >
                    {typeof back === 'object' ? back.text || fromSy.backText : fromSy.backText}
                  </Button>
              }
              {buttonDome}
              {position === 'right' && otherRender}
            </>

            return (
              <>
                {footer ? (
                  <FooterToolbar>
                    {buttonRender}
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
                        {buttonRender}
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
              ...fromSy.allButtonStyle,
              ...fromSy.button.submitStyle
            },
            ...buttonConfig?.submitButton,
          },
          resetButtonProps: {
            style: {
              ...fromSy.allButtonStyle,
              ...fromSy.button.resetStyle
            },
            ...buttonConfig?.resetButton
          },
        }}
      >
        <FormListView  formList={formList} layout={layout} method={method} _config={_config} />
      </ProForm>
    </>
  );
};

export default Form;
