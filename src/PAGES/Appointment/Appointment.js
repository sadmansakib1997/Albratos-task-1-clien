import React from "react";

const Appointment = () => {
  return (
    <div>
      <h1 className="text-center text-5xl text-purple-600 font-bold mb-11">
        This is Blog
      </h1>
      <div>
        <h1 className="text-xl font-bold">
          1.What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="mb-2">
          1 . Communication State:Communication state forms the backbone of your
          React Native app without you even knowing about it. Remember when you
          had requested a call back to an HTTP request? That’s when you
          introduced the communication system in your app. <br />
          2. Data State:Data state covers information that your React
          application stores temporarily for various business functions.
          Supposedly, you are building a project management app. The information
          stored in the data state will include the following things – project
          names, contacts, details about the clients, etc. <br />
          3. Control State:Contrary to the state mentioned above in a React app,
          the control state does not represent the application’s environment.
          Instead, it refers to the state which the user has input into the app.
          For example, form inputs, selected items, etc. Control state is known
          to be more diverse and versatile when it comes to storing information.{" "}
          <br />
          4. Session State:While Session state can store similar patterned
          components like Control state, there is a thick difference between
          both the information stored. For example, you may have a part of a
          Control state information that represents parts of a tree view, you
          can find kind of similar data in the Session state, but it will
          definitely be different from the Control state. <br />
          5. Location State:Location state is the UTF-8 display that appears in
          your URL bar. In fact, the L in URL stands for Locator! One of the
          most interesting facts about Location state is that you can give
          directions to a user to parts of the application that do not have
          unique URLs associated with them. Also, the HTML5 History API allows
          you to store states separately from the specific URL.
        </p>
        <h1 className="text-xl font-bold">
          2. How does prototypical inheritance work?
        </h1>
        <p className="mb-2">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
        </p>
        <h1 className="text-xl font-bold">
          3.What is a unit test? Why should we write unit tests?
        </h1>
        <p className="mb-2">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
        <h1 className="text-xl font-bold">4. React vs. Angular vs. Vue?</h1>
        <p>
          REACT:React can be used as a UI library to render elements, without
          enforcing a specific project structure, and that’s why it’s not
          strictly a framework.
        </p>
        <br />
        <p>
          Vue:Although Vue is not strictly associated with the MVVM
          (Model-View-ViewModel) pattern, its design was partly inspired by it.
          With Vue, you’ll be working mostly on the ViewModel layer, to make
          sure that the application data is processed in a way that allows the
          framework to render an up-to-date View.
        </p>
        <br />
        <p>
          Angular:Each component in Angular contains a Template, a Class that
          defines the application logic, and MetaData (Decorators). The metadata
          for a component tells Angular where to find the building blocks that
          it needs to create and present its view.
        </p>
      </div>
    </div>
  );
};

export default Appointment;
