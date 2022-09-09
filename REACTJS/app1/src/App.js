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
import PrimitiveList_Class from './Module3/4.List rendering/1. Primitive list/PrimitiveList_Class';
import PrimitiveList_Function from './Module3/4.List rendering/1. Primitive list/PrimitiveList_Function';
import ObjectList_Class from './Module3/4.List rendering/2. Object list/ObjectList_Class';
import ObjectList_Function from './Module3/4.List rendering/2. Object list/ObjectList_Function';
import IdasKey_Class from './Module3/4.List rendering/3. Using key property - object id as key/IdasKey_Class';
import IdasKey_Function from './Module3/4.List rendering/3. Using key property - object id as key/IdasKey_Function';
import ObjectasKey_Class from './Module3/4.List rendering/4. Using key property - object as key/ObjectasKey_Class';
import ObjectasKey_Function from './Module3/4.List rendering/4. Using key property - object as key/ObjectasKey_Function';
import IndexasKey_Class from './Module3/4.List rendering/5. Using key property - list index as key/IndexasKey_Class';
import IndexasKey_Function from './Module3/4.List rendering/5. Using key property - list index as key/IndexasKey_Function';
import BasicForm_Class from './Module3/5.Forms/1. Basic form/BasicForm_Class.js';
import BasicForm_Function from './Module3/5.Forms/1. Basic form/BasicForm_Function';
import Onchange_Class from './Module3/5.Forms/2. Using onChange/Onchange_Class';
import Onchange_Function from './Module3/5.Forms/2. Using onChange/Onchange_Function';
import ErrorMessage__Class from './Module3/5.Forms/3. Error message/ErrorMessage_Class';
import ErrorMessage__Function from './Module3/5.Forms/3. Error message/ErrorMessage__Function';
import UsingsetState__Class from './Module3/5.Forms/4. using setState in form/UsingsetState_Class';
import UsingsetState__Function from './Module3/5.Forms/4. using setState in form/UsingsetState_Function';
import RefsWithinComponent_Class from './Module3/6.Refs/1. Using Refs within components/RefsWithinComponent_Class';
import RefsWithinComponent_Function from './Module3/6.Refs/1. Using Refs within components/RefsWithinComponent_Function';
import Parent from './Module3/6.Refs/2. Parent accessing child data/Parent';
import WithoutFragments_Class from './Module4/1.Fragment/1. without fragments/WithoutFragments_Class';
import WithoutFragments_Function from './Module4/1.Fragment/1. without fragments/WithoutFragments_Function';
import WithFragments_Class from './Module4/1.Fragment/2. with Fragments/WithFragments_Class';
import WithFragments_Function from './Module4/1.Fragment/2. with Fragments/WithFragments_Function';
import PredefinedException_Class from './Module4/2.Exception handling/1. Predefined exceptions/PredefinedException_Class';
import PredefinedException_Function from './Module4/2.Exception handling/1. Predefined exceptions/PredefinedException_Function';
import UserdefinedException_Class from './Module4/2.Exception handling/2. User-defined exceptions/UserdefinedException_Class';
import UserdefinedException_Function from './Module4/2.Exception handling/2. User-defined exceptions/UserdefinedException_Function';
import ErrorBoundary1 from './Module4/2.Exception handling/3. Single error boundary/ErrorBoundary1';
import SingleErrorBoundary_Class from './Module4/2.Exception handling/3. Single error boundary/SingleErrorBoundary_Class';
import SingleErrorBoundary_Function from './Module4/2.Exception handling/3. Single error boundary/SingleErrorBoundary_Function';
import EachComponentErrorBoundary_Class from './Module4/2.Exception handling/4. Error boundary for each component/EachComponentErrorBoundary_Class';
import EachComponentErrorBoundary_Function from './Module4/2.Exception handling/4. Error boundary for each component/EachComponentErrorBoundary_Function';
import ErrorBoundary2 from './Module4/2.Exception handling/4. Error boundary for each component/ErrorBoundary2';
import ErrorBoundary_Class from './Module4/2.Exception handling/5. Multiple error boundary components/ErrorBoundary_Class';
import ErrorBoundary_Function from './Module4/2.Exception handling/5. Multiple error boundary components/ErrorBoundary_Function';
import MultipleErrorBoundary_Class from './Module4/2.Exception handling/5. Multiple error boundary components/MultipleErrorBoundary_Class';
import MultipleErrorBoundary_Function from './Module4/2.Exception handling/5. Multiple error boundary components/MultipleErrorBoundary_Function';
import NormalComponentinClass from './Module4/3.PureComponent/1. Class Components are rendered without change/NormalComponentinClass';
import PureComponentinClass from './Module4/3.PureComponent/2. using PureComponent/PureComponentinClass';
import NormalComponentinFunction from './Module4/3.PureComponent/3. Functional Components are rendered without change/NormalComponentinFunction';
import PureComponentinFunction from './Module4/3.PureComponent/4. using memo/PureComponentinFunction';
import TodoListWithoutChangesinClass from './Module4/3.PureComponent/5. List rendering - Class Components are rendered without change/TodoListWithoutChangesinClass';
import TodoListWithPureComponentinClass from './Module4/3.PureComponent/6. List rendering - using PureComponent/TodoListWithPureComponentinClass';
import TodoListinFuunctionalComponent from './Module4/3.PureComponent/7. List rendering - Functional Components are rendered without change/TodoListinFunctionalComponent';
import TodoListinPureComponentinFunction from './Module4/3.PureComponent/8. List rendering - using memo/TodoListinPureComponentinFunction';
import UsingConsumerTag_Class from './Module4/4.Context/1. Using consumer tag/UsingConsumerTag_Class';
import UsingConsumerTag_Function from './Module4/4.Context/1. Using consumer tag/UsingConsumerTag_Function';
import WithoutConsumerTag_Class from './Module4/4.Context/2. Without using consumer tag/WithoutConsumerTag_Class';
import WithoutConsumerTag_Function from './Module4/4.Context/2. Without using consumer tag/WithoutConsumerTag_Function';
import ContextProvider_Component1 from './Module4/4.Context/3. Context provider/ContextProvider_Component1';
import TodoContext2 from './Module4/4.Context/3. Context provider/TodoContext2';
import MetadataContext from './Module4/4.Context/4. Nested context/MetadataContext';
import NestedContext_Component1 from './Module4/4.Context/4. Nested context/NestedContext_Component1';
import TodoContext3 from './Module4/4.Context/4. Nested context/TodoContext3';
import MetadataContext2 from './Module4/4.Context/5. Nested Context - partial context sharing/MetadataContext2';
import PartialContextSharing_Component1 from './Module4/4.Context/5. Nested Context - partial context sharing/PartialContextSharing_Component1';
import PartialContextSharing_Component3 from './Module4/4.Context/5. Nested Context - partial context sharing/PartialContextSharing_Component3';
import TodoContext4 from './Module4/4.Context/5. Nested Context - partial context sharing/TodoContext4';
import ContextProviderChanges_Component1 from './Module4/4.Context/6. Propagating context provider changes/ContextProviderChanges_Component1';
import TodoContext5 from './Module4/4.Context/6. Propagating context provider changes/TodoContext5';
import { useState } from 'react';
import BasicUsage_Todo from './Module4/5.Portals/1. Basic usage/BasicUsage_Todo';
import BasicUsage_PortalTest from './Module4/5.Portals/1. Basic usage/BasicUsage_PortalTest';
import UsingWithJsx_Todo from './Module4/5.Portals/2. using with JSX/UsingWithJsx_Todo';
import UsingWithJsx_PortalTest from './Module4/5.Portals/2. using with JSX/UsingWithJsx_PortalTest';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basic_Header from './Module5/1.Routing/1. Basic/Basic_Header';
import Basic_Footer from './Module5/1.Routing/1. Basic/Basic_Footer';
import Basic_Home from './Module5/1.Routing/1. Basic/Basic_Home';
import Basic_Function from './Module5/1.Routing/1. Basic/Basic_Function';
import Basic_Class from './Module5/1.Routing/1. Basic/Basic_Class';
import Basic_NoPage from './Module5/1.Routing/1. Basic/Basic_NoPage';
import UsingAnchorTag_Header from './Module5/1.Routing/2. Nav menu using anchor tag/UsingAnchorTag_Header';
import UsingAnchorTag_Footer from './Module5/1.Routing/2. Nav menu using anchor tag/UsingAnchorTag_Footer';
import UsingAnchorTag_Home from './Module5/1.Routing/2. Nav menu using anchor tag/UsingAnchorTag_Home';
import UsingAnchorTag_Function from './Module5/1.Routing/2. Nav menu using anchor tag/UsingAnchorTag_Function';
import UsingAnchorTag_Class from './Module5/1.Routing/2. Nav menu using anchor tag/UsingAnchorTag_Class';
import NavMenuUsingLinkTag_Footer from './Module5/1.Routing/3. Nav menu using Link tag/NavMenuUsingLinkTag_Footer';
import NavMenuUsingLinkTag_Header from './Module5/1.Routing/3. Nav menu using Link tag/NavMenuUsingLinkTag_Header';
import NavMenuUsingLinkTag_Home from './Module5/1.Routing/3. Nav menu using Link tag/NavMenuUsingLinkTag_Home';
import NavMenuUsingLinkTag_Function from './Module5/1.Routing/3. Nav menu using Link tag/NavMenuUsingLinkTag_Function';
import NavMenuUsingLinkTag_Class from './Module5/1.Routing/3. Nav menu using Link tag/NavMenuUsingLinkTag_Class';
import Redirecting_Footer from './Module5/1.Routing/4. Redirecting/Redirecting_Footer';
import Redirecting_Header from './Module5/1.Routing/4. Redirecting/Redirecting_Header';
import Redirecting_Home from './Module5/1.Routing/4. Redirecting/Redirecting_Home';
import Redirecting_Function from './Module5/1.Routing/4. Redirecting/Redirecting_Function';
import Redirecting_Class from './Module5/1.Routing/4. Redirecting/Redirecting_Class';
import Redirecting_Function_New from './Module5/1.Routing/4. Redirecting/Redirecting_Function_New';
import Redirecting_Class_New from './Module5/1.Routing/4. Redirecting/Redirecting_Class_New';
import Mounting_Class from './Module5/2.Lifecycle methods/1.Mounting/Mounting_Class';
import Updating_Class from './Module5/2.Lifecycle methods/2.Updating/Updating_Class';
import UnmountingParent from './Module5/2.Lifecycle methods/3.Unmounting/UnmountingParent';
import WithoutCallback_Function from './Module5/3.Hooks/useCallback/1. without useCallback hook/WithoutCallback_Function';
import WithCallback_Function from './Module5/3.Hooks/useCallback/2. with useCallback hook/WithCallback_Function';
import BasicMounting_Function from './Module5/3.Hooks/useEffect/1.Mounting/1. Basic example/BasicMounting_Function';
import UsingsetTimeout_Function from './Module5/3.Hooks/useEffect/1.Mounting/2. using setTimeout/UsingsetTimeout_Function';
import UsingsetInterval_Function from './Module5/3.Hooks/useEffect/1.Mounting/3. using setInterval/UsingsetInterval_InFunction';
import Updating_Function from './Module5/3.Hooks/useEffect/2.Updating/Updating_Function';
import Parent1 from './Module5/3.Hooks/useEffect/3.Unmounting/Parent1';
import WithoutuseMemo_Function from './Module5/3.Hooks/useMemo/1. without useMemo hook/WithoutuseMemo_Function';
import WithuseMemo_Function from './Module5/3.Hooks/useMemo/2. with useMemo hook/WithuseMemo_Function';
import UseReducer_Function from './Module5/3.Hooks/useReducer/UseReducer_Function';
import GetDataonButtonClick_Function from './Module6/1.Axios/GET/1. GET data on button click/GetDataonButtonClick_Function';
import GetDataonButtonClick_Class from './Module6/1.Axios/GET/1. GET data on button click/GetDataonButtonClick_Class';
import GetDataonLoad_Function from './Module6/1.Axios/GET/2. GET data onload/GetDataonLoad_Function';
import GetDataonLoad_Class from './Module6/1.Axios/GET/2. GET data onload/GetDataonLoad_Class';
import GetDatabyid_Function from './Module6/1.Axios/GET/3. GET data by id/GetDatabyid_Function';
import GetDatabyid_Class from './Module6/1.Axios/GET/3. GET data by id/GetDatabyid_Class';
import Post_Function from './Module6/1.Axios/POST/Post_Function';
import Post_Class from './Module6/1.Axios/POST/Post_Class';
import Todo1_Function from './Module6/2.Higher-order components/1. using functions in HOC/Todo1_Function';
import Todo1_Class from './Module6/2.Higher-order components/1. using functions in HOC/Todo1_Class';
import Todo2_Function from './Module6/2.Higher-order components/2. using state in HOC/Todo2_Function';
import Todo2_Class from './Module6/2.Higher-order components/2. using state in HOC/Todo2_Class';
import Todo3_Function from './Module6/2.Higher-order components/3. Passing initial value into HOC/Todo3_Function';
import Todo3_Class from './Module6/2.Higher-order components/3. Passing initial value into HOC/Todo3_Class';
import Todo4_Function from './Module6/2.Higher-order components/4. Forwarding props in HOC/Todo4_Function';
import Todo4_Class from './Module6/2.Higher-order components/4. Forwarding props in HOC/Todo4_Class';

function App() {
  // var id= 1, title= "Learn JSF", description= "Finish this article", priority= 5 ;
  // var todo={"id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5}
  // const step = 5;
  // var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5, "completed": true };
  // var todos=["Learn JSF","Stop drinking too much coffee"]
  // var todos = [ 
  //       { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 },
  //       { "id": 2, "title": "Stop drinking to much coffee", "description": "Coffee is evil!", "priority": 3 },
  //   ];
  // var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };
  // var metadata = { "createdBy": "Arun", "reviewedBy": "Vijay" }
  // var todo = {"title": "Learn JSF", "description": "Finish this article", "priority": 5 };
  // var todo1={...todo,"id":1}
  // var todo1 = { "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 };
  // var todo2 = { "id": 2, "title": "Stop drinking to much coffee", "description": "Coffee is evil!", "priority": 3 }
  // var [todo, setTodo] = useState({ "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5 });
  // function incrementPriority() {
  //   setTodo((prevState) => ({ ...prevState, "priority": prevState.priority + 1}))
  // }
  // function decrementPriority() {
  //   setTodo((prevState) => ({ ...prevState, "priority": prevState.priority - 1}))
  // }
  var todo = { "id": 1, "title": "Learn JSF", "description": "Finish this article", priority: 5 }
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

      {/* <PrimitiveList_Function todos={todos}/> */}
      {/* <PrimitiveList_Class todos={todos}/> */}

      {/* <ObjectList_Function todos={todos}/> */}
      {/* <ObjectList_Class todos={todos}/> */}

      {/* <IdasKey_Function todos={todos}/> */}
      {/* <IdasKey_Class todos={todos}/> */}

      {/* this is for primitive we got the errors when we do it in object props bcz we didn't do any other component created */}
      {/* <ObjectasKey_Function todos={todos}/> */}
      {/* <ObjectasKey_Class todos={todos}/>  */}

      {/* this is for primitive we got the errors when we do it in object props bcz we didn't do any other component created */}
      {/* <IndexasKey_Function todos={todos}/> */}
      {/* <IndexasKey_Class todos={todos}/> */}

      {/* <BasicForm_Function/> */}
      {/* <BasicForm_Class/> */}

      {/* <Onchange_Function/> */}
      {/* <Onchange_Class/> */}

      {/* <ErrorMessage__Function/> */}
      {/* <ErrorMessage__Class/> */}

      {/* <UsingsetState__Function/> */}
      {/* <UsingsetState__Class/> */}

      {/* <RefsWithinComponent_Function/> */}
      {/* <RefsWithinComponent_Class/> */}

      {/* send the todo and metadata Objects  */}
      {/* <Parent isFunctionalChild = {true} /> */}
      {/* <Parent isFunctionalChild = {false} /> */}


{/* module 4  */}
                {/* <h2>Functional Component</h2>
          <table border="2">
            <tbody>
              <tr>
                <WithoutFragments_Function/>
              </tr>
            </tbody>
          </table>
          <h2>Class Component</h2>
          <table  border="2">
            <tbody>
              <tr>
                <WithoutFragments_Class/>
              </tr>
            </tbody>
          </table> */}

              {/* <h2>Functional Component</h2>
        <table border="2">
          <tbody>
            <tr>
              <WithFragments_Function/>
            </tr>
          </tbody>
        </table>
        <h2>Class Component</h2>
        <table  border="2">
          <tbody>
            <tr>
              <WithFragments_Class/>
            </tr>
          </tbody>
        </table> */}

      {/* <PredefinedException_Function/> */}
      {/* <PredefinedException_Class/> */}

      {/* <UserdefinedException_Function todo={todo}/> */}
      {/* <UserdefinedException_Class todo={todo}/> */}

      {/* <ErrorBoundary1>
        <SingleErrorBoundary_Function todo={todo}/>
        <SingleErrorBoundary_Class todo={todo}/>
      </ErrorBoundary1> */}

      {/* <ErrorBoundary2>
      we did the shallow comparision in the todo object that's 
       why we are using todo1 nd adding the id.
         <EachComponentErrorBoundary_Function todo={todo1}/>
      </ErrorBoundary2>
     <ErrorBoundary2>
         <EachComponentErrorBoundary_Class todo={todo}/>
      </ErrorBoundary2> */}

      {/* <ErrorBoundary_Function todo={todo}>
         <MultipleErrorBoundary_Function todo={todo}/>
      </ErrorBoundary_Function>
      < ErrorBoundary_Class todo={todo}>
         <MultipleErrorBoundary_Class todo={todo}/>
       </ErrorBoundary_Class> */}

      {/* <NormalComponentinClass/> */}

      {/* <PureComponentinClass/> */}

      {/* <NormalComponentinFunction/> */}

      {/* <PureComponentinFunction/> */}

      {/* <TodoListWithoutChangesinClass/> */}

      {/* <TodoListWithPureComponentinClass/> */}

       {/* <TodoListinFuunctionalComponent/> */}

       {/* <TodoListinPureComponentinFunction/> */}

      {/* <UsingConsumerTag_Function/> */}
      {/* <UsingConsumerTag_Class/> */}

      {/* <WithoutConsumerTag_Function/> */}
      {/* <WithoutConsumerTag_Class/> */}

      {/* <TodoContext2.Provider value={todo1}>
        <ContextProvider_Component1/>
      </TodoContext2.Provider>
      <hr />
      <TodoContext2.Provider value={todo2}>
        <ContextProvider_Component1 />
      </TodoContext2.Provider> */}

      {/* <TodoContext3.Provider value={todo }>
          <MetadataContext.Provider value={ metadata }>
               <NestedContext_Component1/>
          </MetadataContext.Provider>
     </TodoContext3.Provider> */}


      {/* <MetadataContext2.Provider value={ metadata }>
        <TodoContext4.Provider value={ todo }>
        <PartialContextSharing_Component1/>
        </TodoContext4.Provider>
        <PartialContextSharing_Component3/>
      </MetadataContext2.Provider> */}

      {/* <TodoContext5.Provider value={ { "todo": todo, "incrementPriority": incrementPriority, "decrementPriority": decrementPriority } }>
           <ContextProviderChanges_Component1/>
      </TodoContext5.Provider> */}

      {/* <BasicUsage_Todo/> */}
      {/* <BasicUsage_PortalTest/> */}

      {/* <UsingWithJsx_Todo/> */}
      {/* <UsingWithJsx_PortalTest/> */}

{/* Module5 */}
      {/* <Basic_Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Basic_Home/>}></Route>
            <Route path="/func" element={<Basic_Function/>}></Route>
            <Route path="/class" element={<Basic_Class/>}></Route>
            <Route path="*" element={<Basic_NoPage/>}></Route>
        </Routes>
      </Router>
      <Basic_Footer/> */}

      {/* <UsingAnchorTag_Header/>
<Router>
  <Routes>
    <Route exact path="/"  element={<UsingAnchorTag_Home/>}></Route>
    <Route path="/func"  element={<UsingAnchorTag_Function/>}></Route>
    <Route path="/class" element={<UsingAnchorTag_Class/>}></Route>
  </Routes>
</Router>
<UsingAnchorTag_Footer/> */}

      {/* <Router>
        <NavMenuUsingLinkTag_Header/>
        <Routes>
          <Route exact path="/" element={<NavMenuUsingLinkTag_Home/>}></Route>
          <Route path="/func" element={<NavMenuUsingLinkTag_Function/>}></Route>
          <Route path="/class" element={<NavMenuUsingLinkTag_Class/>}></Route>
        </Routes>
        <NavMenuUsingLinkTag_Footer/>
      </Router> */}

      {/* <Router>
        <Redirecting_Header/>
        <Routes>
          <Route exact path="/" element={<Redirecting_Home/>} />
          <Route path="/func" element={<Redirecting_Function/>} />
          <Route path="/class" element={<Redirecting_Class/>} />
          <Route path="/updated-func" element={<Redirecting_Function_New/>} />
          <Route path="/updated-class" element={<Redirecting_Class_New/>} />
        </Routes>
        <Redirecting_Footer/>
      </Router> */}

  {/* LifeCycle_methods */}
      {/* <Mounting_Class createdBy="Satya" reviewedBy="Prasanna"/> */}

      {/* <Updating_Class createdBy="Satya" reviewedBy="Prasanna"/> */}

      {/* <UnmountingParent/> */}


      {/* Hooks */}
      {/* useCallback */}
      {/* <WithoutCallback_Function/> */}
      {/* <WithCallback_Function/> */}


      {/* useEffect */}
      {/* <BasicMounting_Function/> */}
      {/* <UsingsetTimeout_Function/> */}
      {/* <UsingsetInterval_Function/> */}
      {/* <Updating_Function/> */}
      {/* <Parent1/> */}

      {/* useMemo */}
      {/* <WithoutuseMemo_Function/> */}
      {/* <WithuseMemo_Function/> */}

      {/* useReducer */}
      {/* <UseReducer_Function/> */}


{/* Module6 */}
       {/* <GetDataonButtonClick_Function/> */}
       {/* <GetDataonButtonClick_Class/> */}
       
      {/* <GetDataonLoad_Function/> */}
      {/* <GetDataonLoad_Class/> */}

      {/* <GetDatabyid_Function/> */}
      {/* <GetDatabyid_Class/> */}

      {/* <Post_Function/> */}
      {/* <Post_Class/> */}

  {/* HOC */}
       {/* <Todo1_Function/>
       <Todo1_Class/> */}

        {/* <Todo2_Function/>
       <Todo2_Class/> */}

       {/* <Todo3_Function/>
       <Todo3_Class/> */}

       <Todo4_Function todo={todo}/>
        <Todo4_Class todo={todo}/>

       







      {/* Routing */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navabar/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route> 
      </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navabar_anchor/>}>
          <Route index element={<Home_anchor/>}/>
          <Route path="/about" element={<About_anchor/>}/>
          <Route path="/dashboard" element={<DashBoard_anchor/>}/>
          <Route path="*" element={<NoPage_anchor/>}/>
        </Route> 
      </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navabar_Link/>}>
          <Route index element={<Home_Link/>}/>
          <Route path="/about" element={<About_Link/>}/>
          <Route path="/dashboard" element={<DashBoard_Link/>}/>
          <Route path="*" element={<NoPage_Link/>}/>
        </Route> 
      </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navabar_R/>}>
          <Route index element={<Home_R/>}/>
          <Route path="/about" element={<About_R/>}/>
          <Route path="/dashboard" element={<DashBoard_R/>}/>
          <Route path="*" element={<NoPage_R/>}/>
        </Route> 
      </Routes>
      </BrowserRouter> */}




      {/* LifeCycle_methods */}
      {/* <ParentLifeCycle/> */}
      {/* <UpdateParentLifeCycle/> */}
      {/* <UnmountParentLifeCycle/> */}

      {/* <User userName="Satya"/> */}
      {/* <User/>

      {/* <ErrorBoundary>
      <User userName="Satya"/>
      </ErrorBoundary>
      <ErrorBoundary>
        {" "}
      <User/>
      </ErrorBoundary> */}


      {/* Hooks */}
      {/* useState */}
      {/* <Todo_Class_No_Changes/>
       <Todo_Function_No_Changes/> */}

      {/* <Todo_Class_StateObject/>
       <Todo_Function_StateObject/> */}

      {/* <Todo_Class_setState/>
       <Todo_Function_setState/> */}


      {/* <Todo_Class_DataChange/>
       <Todo_Function_DataChange/> */}


      {/* <Todo_Class_UsingProps step={ step } />
       <Todo_Function_UsingProps step={ step } /> */}

      {/* <Todo_Class_Callback step={ 5 } /> */}

      {/* Refs */}
      {/* <Todo_Class_Refs/>
        <Todo_Function_Refs/> */}

      {/* useCallback */}
      {/* <Nocalllback_Todo_Function/> */}

      {/* <Withcalllback_Todo_Function/> */}


      {/* useEffect */}
      {/* <Basic_Todo_Function/> */}
      {/* <Todo_Function_setTimeout/> */}
      {/* <Todo_Function_setInterval/> */}

      {/* <Unmount_Parent/> */}

      {/* <Updating_Todo_Function/> */}

      {/* useMemo */}
      {/* <Todo_Function_Without_useMemo/> */}
      {/* <Todo_Function_useMemo/> */}

      {/* useReducer */}
      {/* <Todo_Function_useReducer/> */}


    </div>
  );
}

export default App;
