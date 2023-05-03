import React from 'react'
import DataTable from '../../../../../components/others/Datatable/DataTable'

function Documents() {
  return (
    <div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff'}}>
                        <div style={{padding:'10px'}}>
                            <DataTable columns={["Document ID","Document Description","Document Number","Origin Number","Copy Number"]} />
                        </div>
                        </div>
                            {/* <hr style={{border:'2px solid blue',margin:'15px 0'}} /> */}
                            <br />
                            <div style={{width:'60%',margin:'0 auto'}}>
                            <DataTable title={"Clauses"} columns={["Code","Description"]} />
                            </div>
    </div>
  )
}

export default Documents