import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { SupportAgentList } from "./supportAgent/SupportAgentList";
import { SupportAgentCreate } from "./supportAgent/SupportAgentCreate";
import { SupportAgentEdit } from "./supportAgent/SupportAgentEdit";
import { SupportAgentShow } from "./supportAgent/SupportAgentShow";
import { ChatbotResponseList } from "./chatbotResponse/ChatbotResponseList";
import { ChatbotResponseCreate } from "./chatbotResponse/ChatbotResponseCreate";
import { ChatbotResponseEdit } from "./chatbotResponse/ChatbotResponseEdit";
import { ChatbotResponseShow } from "./chatbotResponse/ChatbotResponseShow";
import { SupportTicketList } from "./supportTicket/SupportTicketList";
import { SupportTicketCreate } from "./supportTicket/SupportTicketCreate";
import { SupportTicketEdit } from "./supportTicket/SupportTicketEdit";
import { SupportTicketShow } from "./supportTicket/SupportTicketShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Customer Success Chatbot"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="SupportAgent"
          list={SupportAgentList}
          edit={SupportAgentEdit}
          create={SupportAgentCreate}
          show={SupportAgentShow}
        />
        <Resource
          name="ChatbotResponse"
          list={ChatbotResponseList}
          edit={ChatbotResponseEdit}
          create={ChatbotResponseCreate}
          show={ChatbotResponseShow}
        />
        <Resource
          name="SupportTicket"
          list={SupportTicketList}
          edit={SupportTicketEdit}
          create={SupportTicketCreate}
          show={SupportTicketShow}
        />
      </Admin>
    </div>
  );
};

export default App;
