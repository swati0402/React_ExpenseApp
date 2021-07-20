import '../../styles/Chart.css'
import ChartBar from './ChartBar'
const Chart =props=>{
    const dataPointsvalues= props.dataPoints.map(dataPoint => dataPoint.value)
    const totalmax=Math.max(...dataPointsvalues)

    return(
        <div className="chart">
            {props.dataPoints.map(
                (dataPoint)=>(
                    <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalmax}
                    label={dataPoint.label}/>
                )
            )}
            
        </div>
    )
}
export default Chart