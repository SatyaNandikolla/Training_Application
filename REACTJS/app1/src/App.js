import './App.css';
import HelloWorld from './Module1/1.HelloWorld';
import Callback from './Module1/10.Callback';
import Npm from './Module1/11.npm';
import WeaklyTyped from './Module1/2.WeaklyTyped';
import Test1 from './Module1/3.Class/test1';
import Inheritance from './Module1/4.Inheritance';
import Static from './Module1/5.Static';
import Import from './Module1/6.Import/Import';
import ArrowFunction from './Module1/7.ArrowFunction';
import Exception from './Module1/8.Exceptions';
import Events from './Module1/9.Events';
import ShallowCopy from './Module1/Shallow Comparision and spred operator/ShallowCopy';
import Array from './Module1/Shallow Comparision and spred operator/SpreadOperator(array)';
import Object from './Module1/Shallow Comparision and spred operator/SpreadOperator(object)';
import Class_HellowWorld from './Module2/2.Hello World/class';
import Func_HelloWorld from './Module2/2.Hello World/func';
import Jsx_Class from './Module2/3.JSX/Jsx_Class';
import Jsx_Function from './Module2/3.JSX/Jsx_Function';
import React_Class from './Module2/4.React createElement/React_Class';
import React_Function from './Module2/4.React createElement/React_Function';
import ObjectClass from './Module2/5.Props/ObjectProps/ObjectClass';
import ObjectFunction from './Module2/5.Props/ObjectProps/ObjectFunction';
import PrimitiveClass from './Module2/5.Props/PrimitiveProps/PrimitiveClass';
import PrimitiveFunction from './Module2/5.Props/PrimitiveProps/PrimitiveFunction';
import PropTypes_Class from './Module2/6.PropTypes/1. Primitive props/PropTypes_Class';
import PropTypes_Function from './Module2/6.PropTypes/1. Primitive props/PropTypes_Function';
import OPropTypes_Class from './Module2/6.PropTypes/2. Object props/OPropTypes_Class';
import OPropTypes_Function from './Module2/6.PropTypes/2. Object props/OPropTypes_Function';
import StatelessEvents_Class from './Module2/7.Events/1. Stateless events/StatelessEvents_Class';
import StatelessEvents_Function from './Module2/7.Events/1. Stateless events/StatelessEvents_Function';
import StatefulEvents_Class from './Module2/7.Events/2. Stateful event handler - event binding/StatefulEvents_Class';
import NoChanges_Class from './Module2/8.State/1. Not reflecting data changes/NoChanges_Class';
import NoChanges_Function from './Module2/8.State/1. Not reflecting data changes/NoChanges_Function';
import StateObject_Class from './Module2/8.State/2. state object/StateObject_Class';
import StateObject_Function from './Module2/8.State/2. state object/StateObject_Function';
import NoChangeDirectly_Class from './Module2/8.State/3. state is not changed directly copy/NoChangeDirectly_Class';
import NoChangeDirectly_Function from './Module2/8.State/3. state is not changed directly copy/NoChangeDirectly_Function';
import Changes_Class from './Module2/8.State/4. Reflecting data changes - setState/components/Changes_Class';
import Changes_Function from './Module2/8.State/4. Reflecting data changes - setState/components/Changes_Function';
import UsingProps_Class from './Module2/8.State/5. Using props in setState/UsingProps_Class';
import UsingProps_Function from './Module2/8.State/5. Using props in setState/UsingProps_Function';
import SetStateCallback_Class from './Module2/8.State/6. setState callback/SetStateCallback_Class';
import PrimitivePropsDestracturing_Class from './Module3/1.Destructuring/1.Primitive Props/PrimitivePropsDestracturing_Class';
import PrimitivePropsDestracturing_Function from './Module3/1.Destructuring/1.Primitive Props/PrimitivePropsDestracturing_Function';
import ObjectPropsDestracturing_Class from './Module3/1.Destructuring/2.Object Props/ObjectPropsDestracturing_Class';
import ObjectPropsDestracturing_Function from './Module3/1.Destructuring/2.Object Props/ObjectPropsDestracturing_Function';
import PropsandState_Class from './Module3/1.Destructuring/3.Props and State/PropsandState_Class';
import PropsandState_Function from './Module3/1.Destructuring/3.Props and State/PropsandState_Function';
import CRendering_Class from './Module3/2.Conditional rendering/1. if-else rendering/CRendering_Class';
import CRendering_Function from './Module3/2.Conditional rendering/1. if-else rendering/CRendering_Function';
import CInline_Class from './Module3/2.Conditional rendering/2. inline conditions/CInline_Class';
import CInline_Function from './Module3/2.Conditional rendering/2. inline conditions/CInline_Function';
import CssStyle_Class from './Module3/3.Styles/1. css class/CssStyle_Class';
import CssStyle_Function from './Module3/3.Styles/1. css class/CssStyle_Function';
import InlineStyles_Class from './Module3/3.Styles/2. inline styles/InlineStyles_Class';
import InlineStyles_Function from './Module3/3.Styles/2. inline styles/InlineStyles_Function';
import StyleModule_Class from './Module3/3.Styles/3. style module/StyleModule_Class';
import StyleModule_Function from './Module3/3.Styles/3. style module/StyleModule_Function';
import Todo_Class from './Module3/3.Styles/4. style module vs css file/Todo_Class';
import Todo_Function from './Module3/3.Styles/4. style module vs css file/Todo_Function';

function App() {
  // var id= 1, title= "Learn JSF", description= "Finish this article", priority= 5 ;
  // var todo={"id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5}
  // const step = 5;
  var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5, "completed": true };
  return (
    <div className="App">
      <h2>Hello Training Application</h2>
{/* Module 1 */}
      {/* <HelloWorld/> */}
      {/* <WeaklyTyped/> */}
      {/* <Test1/> */}
      {/* <Inheritance/> */}
      {/* <Static/> */}
      {/* <Import/> */}
      {/* <ArrowFunction/> */}
      {/* <Exception/> */}
      {/* <Events/> */}
      {/* <Callback/> */}
      {/* <Npm/> */}
{/* Spread operator-shallow comparison */}
      {/* <Object/> */}
      {/* <Array/> */}
      {/* <ShallowCopy/> */}

{/* Module 2 */}
      {/* <Func_HelloWorld/> */}
      {/* <Class_HellowWorld/> */}
      
      {/* <Jsx_Function/> */}
      {/* <Jsx_Class/> */}
      
       {/* <React_Function/> */}
       {/* <React_Class/> */}

      {/* <PrimitiveFunction id={id} title={title} description={description} priority={priority}/> */}
      {/* <PrimitiveClass id={id} title={title} description={description} priority={priority}/> */}

      {/* <ObjectFunction todo={todo}/> */}
      {/* <ObjectClass todo={todo}/> */}

      {/* <PropTypes_Function id={id} title={title} description={description} priority={priority}/> */}
      {/* <PropTypes_Class id={id} title={title} description={description} priority={priority}/> */}

      {/* <OPropTypes_Function todo={todo}/> */}
      {/* <OPropTypes_Class todo={todo}/> */}

      {/* <StatelessEvents_Function/> */}
      {/* <StatelessEvents_Class/> */}

      {/* <StatefulEvents_Class/> */}

      {/* <NoChanges_Function/> */}
      {/* <NoChanges_Class/> */}

      {/* <StateObject_Function/> */}
        {/* <StateObject_Class/> */}

      {/* <NoChangeDirectly_Function/> */}
       {/* <NoChangeDirectly_Class/> */}

      {/* <Changes_Function/> */}
       {/* <Changes_Class/> */}

      {/* <UsingProps_Function step={step}/> */}
       {/* <UsingProps_Class step={step}/> */}

      {/* <SetStateCallback_Class step={ 5 }/>  */}

{/* Module3 */}
      {/* <PrimitivePropsDestracturing_Function id={id} title={title} description={description} priority={priority}/> */}
      {/* <PrimitivePropsDestracturing_Class id={id} title={title} description={description} priority={priority}/> */}

      {/* <ObjectPropsDestracturing_Function todo={todo}/> */}
      {/* <ObjectPropsDestracturing_Class todo={todo}/> */}

      {/* <PropsandState_Function id={id} title={title} description={description} priority={priority}/> */}
      {/* <PropsandState_Class id={id} title={title} description={description} priority={priority}/> */}

      {/* <CRendering_Function todo={todo}/> */}
      {/* <CRendering_Class todo={todo}/> */}

      {/* <CInline_Function todo={todo}/> */}
      {/* <CInline_Class todo={todo}/> */}

      {/* <CssStyle_Function todo={todo} color="green"/>  */}
      {/* <CssStyle_Class todo={todo} color="green"/> */}

      {/* <InlineStyles_Function todo={todo} color="green"/> */}
      {/* <InlineStyles_Class todo={todo} color="green"/> */}

      {/* <StyleModule_Function todo={todo} color="green"/> */}
      {/* <StyleModule_Class todo={todo} color="green"/> */}

      {/* <Todo_Function todo={todo}/> */}
      {/* <Todo_Class todo={todo}/> */}

      <PrimitiveList_Function todos={todos}/>
      <PrimitiveList_Class todos={todos}/>

      {/* <ObjectList_Function todos={todos}/>
      <ObjectList_Class todos={todos}/> */}

      {/* <IdasKey_Function todos={todos}/>
      <IdasKey_Class todos={todos}/> */}

      {/* this is for primitive we got the errors when we do it in object props bcz we didn't do any other component created */}
      {/* <ObjectasKey_Function todos={todos}/>
      <ObjectasKey_Class todos={todos}/> */}

      {/* this is for primitive we got the errors when we do it in object props bcz we didn't do any other component created */}
      {/* <IndexasKey_Function todos={todos}/>
      <IndexasKey_Class todos={todos}/> */}

      {/* <BasicForm_Function/>
      <BasicForm_Class/> */}

      {/* <Onchange_Function/>
      <Onchange_Class/> */}

      {/* <ErrorMessage__Function/>
      <ErrorMessage__Class/> */}

      {/* <UsingsetState__Function/>
      <UsingsetState__Class/> */}

      {/* <RefsWithinComponent_Function/>
      <RefsWithinComponent_Class/> */}

      {/* send the todo and metadata Objects  */}
      {/* <Parent isFunctionalChild = {true} />
      <Parent isFunctionalChild = {false} /> */}
    </div>
  );
}

export default App;
