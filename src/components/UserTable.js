import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useTheme } from '../Context/ThemeContext'

const UserTable = ({ data }) => {
    const theme = useTheme();
    const cellStyle = { color: theme.textColor, textAlign: 'center' }

    return (
        <div className='table'>
            <TableContainer>
                <Table>
                    <TableHead style={{fontWeight:'700S'}}>
                        <TableRow>
                            <TableCell style={cellStyle}>WPM</TableCell>
                            <TableCell style={cellStyle}>Accuracy</TableCell>
                            <TableCell style={cellStyle}>Characters<span>(correct/incorrect/missed/extra chars)</span></TableCell>
                            <TableCell style={cellStyle}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((ele, ind) => (
                                <TableRow key={ind}>
                                    <TableCell style={cellStyle}>{ele.wpm}</TableCell>
                                    <TableCell style={cellStyle}>{ele.accuracy}</TableCell>
                                    <TableCell style={cellStyle}>{ele.Characters}</TableCell>
                                    <TableCell style={cellStyle}>{ele.timeStamp.toDate().toLocaleString()}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserTable