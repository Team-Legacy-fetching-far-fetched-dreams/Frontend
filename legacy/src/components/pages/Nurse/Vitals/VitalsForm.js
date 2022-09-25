import React from 'react'
import './VitalsForm.css';
import bgImg from "../images/doc6.png";
import { useForm} from 'react-hook-form';


export const VitalsForm = () => {

    const{ register, handleSubmit, watch, formState:{errors}} = useForm()
    const onSubmit = data => console.log(data);

    console.log(watch('username'));

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2 className="head">Vitals Form</h2>
                <span>this form is under test!</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="label">Temperature</h1> 
                    <input type="number"{...register("temperature",{required:Number, maxLength:5})} placeholder='temperature(celsius)' />
                    <h3 className="tags">{errors.temperature?.type==="required"&&"Temperature is required"}</h3>
                    <h3 className="tags">{errors.temperature?.type==="maxLength"&&"Max Length Exceeded"}</h3>
                    
                    <h1 className="label">Weight</h1>
                    <input type="number"{...register("weight",{required:Number, maxLength:5})} placeholder='weight(kg)' />
                    <h3 className="tags">{errors.weight?.type==="required"&&"Weight is required"}</h3>
                    <h3 className="tags">{errors.weight?.type==="maxLength"&&"Max Length Exceeded"}</h3>

                    <h1 className="label">Height</h1>
                    <input type="number"{...register("height",{required:Number, maxLength:5})} placeholder='height(m)' />
                    <h3 className="tags">{errors.height?.type==="required"&&"Height is required"}</h3>
                    <h3 className="tags">{errors.height?.type==="maxLength"&&"Max Length Exceeded"}</h3>

                    
                    <h1 className="label">Blood Pressure</h1>
                    <div className='bp'>
                    <div >
                    <input type="number"{...register("bloodpressure_mm",{required:Number, maxLength:5})} placeholder='bloodpressure_mm' className='eachbp'/>
                    </div>
                    <h3 className="tags">{errors.bloodpressure_mm?.type==="required"&&"Blood pressure_mm is required"}</h3>
                    <h3 className="tags">{errors.bloodpressure_mm?.type==="maxLength"&&"Max Length Exceeded"}</h3>
                    <div id='slash'>/</div>
                    <div >
                    <input type="number"{...register("bloodpressure_hg",{required:Number, maxLength:5})} placeholder='bloodpressure_hg' className='eachbp'/>
                    </div>
                    <h3 className="tags">{errors.bloodpressure_hg?.type==="required"&&"Blood pressure_hg is required"}</h3>
                    <h3 className="tags">{errors.bloodpressure_hg?.type==="maxLength"&&"Max Length Exceeded"}</h3>
                    </div>
                    

                    



                   

                   
                    
                    
                    
                    
                    <button className='btn'>Submit</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg}alt=""/>
            </div>
        </div>
    </section>
  )
}
export default VitalsForm;