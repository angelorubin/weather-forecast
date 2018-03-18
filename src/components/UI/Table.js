import styled from 'styled-components'

export const Table = styled.table`
    /* 
    Generic Styling, for Desktops/Laptops 
    */
    width: 100%; 
    border-collapse: collapse; 
    /* Zebra striping */
    tr:nth-of-type(odd) { 
         
    }
    th { 
        background: #333; 
        color: white; 
        font-weight: bold; 
    }
    td, th { 
        padding: 6px;
        text-align: left; 
    }
    thead tr td {
        color: whitesmoke;
    }
  `