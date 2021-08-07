import Form from './Form';
import FormList from './FormList';

type FormType = typeof Form;
type FormListType = typeof FormList;

export interface RenderWay extends FormType {
  List: FormListType;
}

const Index = Form as RenderWay
Index.List = FormList

export default Index;
