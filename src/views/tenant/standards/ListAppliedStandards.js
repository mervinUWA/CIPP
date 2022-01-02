import React from 'react'
import { useSelector } from 'react-redux'
import TenantSelector from '../../../components/cipp/TenantSelector'
import CippDatatable from '../../../components/cipp/CippDatatable'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CCard,
  CCardBody,
  CCardTitle,
  CCardHeader,
} from '@coreui/react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const dropdown = (row, index, column) => {
  return (
    <CDropdown>
      <CDropdownToggle size="sm" color="link">
        <FontAwesomeIcon icon={faBars} />
      </CDropdownToggle>
      <CDropdownMenu style={{ position: 'fixed', right: 0, zIndex: 1000 }}>
        <CDropdownItem href="#">Delete Stnadard</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
const columns = [
  {
    name: 'Tenant Name',
    selector: (row) => row['displayName'],
    sortable: true,
  },
  {
    name: 'Standard',
    selector: (row) => row['standardName'],
    sortable: true,
  },
  {
    name: 'Applied By',
    selector: (row) => row['appliedBy'],
    sortable: true,
  },
  {
    name: 'Action',
    cell: dropdown,
  },
]

const TenantsList = () => {
  const tenant = useSelector((state) => state.app.currentTenant)

  return (
    <div>
      <CCard>
        <CCardHeader>
          <CCardTitle className="text-primary">Applied Standards</CCardTitle>
        </CCardHeader>
        <CCardBody>
          <CippDatatable
            keyField="id"
            reportName={`${tenant?.defaultDomainName}-AppliedStandards-List`}
            path="/api/ListStandards"
            columns={columns}
            params={{ TenantFilter: tenant?.defaultDomainName }}
          />
        </CCardBody>
      </CCard>
    </div>
  )
}

export default TenantsList
