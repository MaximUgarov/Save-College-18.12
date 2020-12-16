import React, { Component } from 'react';
import './App.css';
import Navbar from './components/global/navbar'
import SlideBar from './components/global/leftMenu'
import Footer from './components/global/footer';
import './index.css'
import MainPage from './components/pages/mainPage';
import BooksPage from './components/pages/booksPage'
import ReceptionPage from './components/pages/receptionPage/receptionPage'
import InformationPage from './components/pages/informationPage/information'
import { Context } from './context';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import InvalidPage from './components/pages/invalidPage';
import DocumentsPage from './components/pages/documetnsPage/documentsPage';
import EducationPage from './components/pages/educationPage/educationPage';
import EducationStandartPage from './components/pages/educationStandartPage.jsx/educationStandartPage';
import TeachingstaffPage from './components/pages/teachingstaffPage/teachingstaffPage';
import MainPageNewsPage from './components/pages/MainPage/MainPageNewsPage';
import Covid19Page from './components/pages/COVID-19Page/Covid-19Page';
import StudentPage from './components/pages/studentPage/studentPage';
import ParentPage from './components/pages/parentPage/ParentPage';
import AbiturientPage from './components/pages/abiturientPage/abiturientPage';
import ControlPage from './components/pages/ControlPage/ControlPage';
import MobileNavBlock from './components/global/MobileNavBlock';
import MobileFooter from './components/global/MobileFooter';
import ProvisionPage from './components/pages/provisionPage/provisionPage';
import ScholarshipPage from './components/pages/scholarshipPage/scholarshipPage'
import EconomicPage from './components/pages/economicPage/economicPage';
import PayPage from './components/pages/payPage/payPage';
import SizePage from './components/pages/sizePage/sizePage';
import GraphicsPage from './components/pages/graphicsPage/GraphicsPage';
import ResearchPage from './components/pages/researchPage/researchPage';
import CertificationPage from './components/pages/certificationPage/certificationPage';
import SchedulecallsPage from './components/pages/schedulecallsPage/schedulecallsPage';
import SessionPage from './components/pages/SessionPage/SessionPage';
import OlympiadsPage from './components/pages/OlympiadsPage/OlympiadsPage';
import DemoexamPage from './components/pages/DemoexamPage/DemoexamPage';
import IndependentsystemPage from './components/pages/IndependentsystemPage/IndependentsystemPage';
import OpendayPage from './components/pages/OpendayPage/OpendayPage';
import SetPage from './components/pages/setPage/setPage';
import ElectricianPage from './components/pages/SpecialtyPages/ElectricianPage';
import Documentationpage from './components/pages/SpecialtyPages/Documentationpage';
import CommunicationPage from './components/pages/SpecialtyPages/CommunicationPage';
import InformationSecurity from './components/pages/SpecialtyPages/InformationSecurity';
import ProgrammingPage from './components/pages/SpecialtyPages/ProgrammingPage';
import AdministrationPage from './components/pages/SpecialtyPages/AdministrationPage';
import MaintenanceService from './components/pages/SpecialtyPages/MaintenanceService';
// import DocumentationPlatPage from './components/pages/SpecialtyPages/DocumentationPlatPage';
import ProgrammingPlatPage from './components/pages/SpecialtyPages/ProgrammingPlat';
import SelectionCommitteePage from './components/pages/SelectionCommitteePage/SelectionCommitteePage';
import ImplementationEducationalProgramsPage from './components/pages/ImplementationEducationalProgramsPage/ImplementationEducationalProgramsPage';
import StateAssignmentPage from './components/pages/StateAssignmentPage/StateAssignmentPage';
import CustomPage from './components/pages/CustomPage/CustomPage';
import AccountingStatementPage from './components/pages/AccountingStatementPage/AccountingStatementPage';
import DonationsPage from './components/pages/DonationsPage/DonationsPage';
import ContestsPage from './components/pages/ContestsPage/ContestsPage';
import ConferencePage from './components/pages/ConferencePage/ConferencePage';
import GreatVictoryPage from './components/pages/GreatVictoryPage/GreatVictoryPage';
import MassSportsPage from './components/pages/MassSportsPage/MassSportsPage';
import VolunteersPage from './components/pages/VolunteersPage/VolunteersPage';
import FormulaSuccessPageMembers from './components/pages/FormulaSuccessPage/SubComponents/FormulaSuccessPageMembers';
import FormulaSuccessPage from './components/pages/FormulaSuccessPage/FormulaSuccessPage';
import MuseumPage from './components/pages/MuseumPage/MuseumPage';
import LinksPage from './components/pages/LinksPage/LinksPage';
import MethodicalAssociationPage from './components/pages/MethodicalAssociationPage/MethodicalAssociationPage';
import GraduatesPage from './components/pages/GraduatesPage/GraduatesPage';
import EmployersPage from './components/pages/EmployersPage/EmployersPage';
import CityProfessionalsPage from './components/pages/CityProfessionalsPage/CityProfessionalsPage';
import LegalAssistancePage from './components/pages/LegalAssistancePage/LegalAssistancePage';
import HelplinePage from './components/pages/HelplinePage/HelplinePage';
import Antiterrorpage from './components/pages/AntiterrorPage/Antiterrorpage';
import InformationSecurityPage from './components/pages/InformationSecurityPage/InformationSecurityPage';
import CorruptionPage from './components/pages/CorruptionPage/CorruptionPage';
import CorruptionActs from './components/pages/CorruptionPage/subPages/CorruptionActs';
import MethodicalMaterial from './components/pages/CorruptionPage/subPages/MethodicalMaterial';
import CorruptFeedback from './components/pages/CorruptionPage/subPages/CorruptFeedback';
import InclusivePage from './components/pages/InclusivePage/InclusivePage';
import MrPage from './components/pages/MrPage/MrPage';



class App extends Component {

  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }


  render() {
   

      

    return (

      <Context.Provider value={{
        url:"http://localhost:8000"}}>

        <div className="App">
          {this.state.width > 1100 ? <SlideBar></SlideBar> : null}
          {this.state.width > 1100 ? <Navbar></Navbar> : null}
          {this.state.width < 1100 ? <MobileNavBlock></MobileNavBlock> : null}
          <div className="content-container">
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/books' component={BooksPage} />
              <Route path='/blind' component={InvalidPage} />
              <Route path='/reception' component={ReceptionPage} />
              <Route path='/info' component={InformationPage} />
              <Route path='/documents' component={DocumentsPage} />
              <Route path='/eduprogramm' component={EducationPage} />
              <Route path='/fgs' component={EducationStandartPage} />
              <Route path='/RPS' component={TeachingstaffPage} />
              <Route path='/news/:id' component={MainPageNewsPage} />
              <Route path='/COVID-19' component={Covid19Page} />
              <Route path='/students' component={StudentPage} />
              <Route path='/roditeli' component={ParentPage} />
              <Route path='/abiturient' component={AbiturientPage} />
              <Route path='/direction' component={ControlPage} />
              <Route path='/tehnical' component={ProvisionPage} />
              <Route path='/stip' component={ScholarshipPage} />
              <Route path='/fhd' component={EconomicPage} />
              <Route path='/pay' component={PayPage} />
              <Route path='/counts' component={SizePage} />
              <Route path='/grafiki' component={GraphicsPage} />
              <Route path='/edumaterials' component={ResearchPage} />
              <Route path='/gia' component={CertificationPage} />
              <Route path='/zvonki' component={SchedulecallsPage} />
              <Route path='/zo' component={SessionPage} />
              <Route path='/konkurs' component={OlympiadsPage} />
              <Route path='/demoekzamen' component={DemoexamPage} />
              <Route path='/nsoko' component={IndependentsystemPage} />
              <Route path='/opendoor' component={OpendayPage} />
              <Route path='/nabor' component={SetPage} />
              <Route path='/inform_ob_isp' component={ImplementationEducationalProgramsPage} />
              <Route path='/spops' component={ElectricianPage} />
              <Route path='/spdo' component={Documentationpage} />
              <Route path='/spss' component={CommunicationPage} />
              <Route path='/spoib' component={InformationSecurity} />
              <Route path='/spisp' component={ProgrammingPage} />
              <Route path='/spks' component={AdministrationPage} />
              <Route path='/spto' component={MaintenanceService} />
              {/* <Route path='/spdo_zaoch' component={DocumentationPlatPage} /> */}
              <Route path='/ndoc' component={SelectionCommitteePage} />
              <Route path='/aufgabe' component={StateAssignmentPage} />
              <Route path='/purchase' component={CustomPage} />
              <Route path='/bookkeeping' component={AccountingStatementPage} />
              <Route path='/donations' component={DonationsPage} />
              <Route path='/konkyrsy' component={ContestsPage} />
              <Route path='/it_forum' component={ConferencePage} />
              <Route path='/pobeda' component={GreatVictoryPage} />
              <Route path='/sport' component={MassSportsPage} />
              <Route path='/volonters' component={VolunteersPage} />
              <Route path='/formula_uspeha/' component={FormulaSuccessPage} />
              <Route path='/formula_uspehaMember/:id' component={FormulaSuccessPageMembers} />
              <Route path='/musey_svazy' component={MuseumPage} />
              <Route path='/links' component={LinksPage} />
              <Route path='/mo' component={MethodicalAssociationPage} />
              <Route path='/vipusknik' component={GraduatesPage} />
              <Route path='/rabotodatel' component={EmployersPage} />
              <Route path='/gorodprof' component={CityProfessionalsPage} />
              <Route path='/justece' component={LegalAssistancePage} />
              <Route path='/teldov' component={HelplinePage} />
              <Route path='/antiterror' component={Antiterrorpage} />
              <Route path='/information_security' component={InformationSecurityPage} />
              <Route path='/corrupt' component={CorruptionPage} />
              <Route path='/corrupt_acts' component={CorruptionActs} />
              <Route path='/corrupt_materials' component={MethodicalMaterial} />
              <Route path='/corrupt_feedback' component={CorruptFeedback} />
              <Route path='/invalid' component={InclusivePage} />
              <Route path='/Mr/:id' component={MrPage} />










              {/* Роунты на внешние ресурсы */}
              <Route path='/distance-learning' component={() => {
                window.location.href = 'http://moodle.kolledgsvyazi.ru:808/';
                return null;
              }} />
              <Route path='/detski-teldov' component={() => {
                window.location.href = 'https://fond-detyam.ru/';
                return null;
              }} />
              <Route path='/trudoustroistvo' component={() => {
                window.location.href = 'http://localhost:8000/wp-content/uploads/2020/12/trudoustroistvo1.pdf';
                return null;
              }} />

            </Switch>
          </div>
          {this.state.width > 900 ? <Footer></Footer> : null}
          {this.state.width < 900 ? <MobileFooter></MobileFooter> : null}
        </div>
        </Context.Provider>
    );
  }
}

export default withRouter(App);


