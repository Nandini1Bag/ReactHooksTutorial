import { createContext, useContext } from 'react';

const TabContext = createContext();

export const  Tab =({ children, value, onChange })=> {
  return (
    <div>
      <TabContext.Provider value={{ value, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

// export const Tab = ({ children }) => {
//     const [activeTab, setActiveTab] = useState(0); // Track the active tab index
  
//     return (
//       <TabsContext.Provider value={{ activeTab, setActiveTab }}>
//         <div className="tabs">
//           {children}
//         </div>
//       </TabsContext.Provider>
//     );
//   };

Tab.Heads = ({ children }) => {
  return <div className='heads'>{children}</div>;
};

Tab.ContentWrapper = ({ children }) => {
  return <div className='contentWraper'>{children}</div>;
};

export const TabItem = ({ label, index }) => {
  const { value, onChange } = useContext(TabContext);
  return (
    <div
      onClick={() => onChange(index)}
      className={`item ${index === value ? 'active' : null}`}
    >
      {label}
    </div>
  );
};



export const TabContent = ({ children, index }) => {
  const { value } = useContext(TabContext);
  return value === index ? <div>{children}</div> : null;
};