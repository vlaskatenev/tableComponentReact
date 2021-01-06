import React from 'react'
import './Table.css'


{/* <Table 
    nameTable={['Имя ПК', 'Статус', '', 'Дата']}
    content={this.props.historyList}
    keysObj={['computer_name', 'events_id', this.AddTagToTable.bind(this), 'date_time']} /> */}
export const Table = props => {
    return (
        <div>
            <table className='Table'>
                <tbody>
                    <TableName nameTable={props.nameTable}/>
                    <ContentTable content={props.content} keysObj={props.keysObj}/>
                </tbody>
            </table>
        </div>
    )
}


const TableName = ({nameTable}) => {
    return nameTable.map((name, index) => <th key={index}>{name}</th>)
}


const ContentTable = ({content, keysObj}) => {
    return content.map((el, i) => {
        return <tr key={i}>
        <RowTable keysObj={keysObj} elem={el} />
        </tr>
    })
}


const RowTable = ({keysObj, elem}) => {
    return keysObj.map((keys, i) => {
        if (typeof(keys) === 'function') {
            console.log('typeof(keys)', typeof(keys));
             const Component = keys()
             return <td key={i}><Component elem={elem} /></td>
        } else if (typeof(keys) !== 'string') {
             const Component = keys
             return <td key={i}><Component elem={elem} /></td>
        }
        return <td key={i}>{ elem[keys] }</td>
})
}