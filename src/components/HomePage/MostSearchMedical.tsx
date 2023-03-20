import mostSearchCondition from './specialtiesData.json'
import './mostSearchMedical.css'

type MostSearchConditionListItem = {
  id: number;
  medicalConditionsLabel: string;
  medicalConditionsUrl: string;
}
type MostSearchConditionListData ={
  mostSearch: {
    medicalConditions:MostSearchConditionListItem[]
  }
}
const MostSearchMedical: React.FC =() => {
  var mostSearchConditionListData:MostSearchConditionListData = mostSearchCondition;
  return (
    <>
      <h2 className="text-3xl fw-bold usp-paragraph mb-6 nunito-Sans">Most searched medical conditions</h2>
      {mostSearchConditionListData.mostSearch.medicalConditions.map((medicalCondition: MostSearchConditionListItem) => (
        
        <a className="badge-primary-icliniq" key={medicalCondition.id} href={medicalCondition.medicalConditionsUrl}>{medicalCondition.medicalConditionsLabel}</a>
      ))}
    </>
  )
}

export default MostSearchMedical