// app/blueprint/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import QuestionnaireForm from '../../components/blueprint/QuestionnaireForm';

export default function BlueprintPage() {
  return (
    <>
     <Header/>
    <QuestionnaireForm />
    <Footer/>
    </>
  );
}