import React, { useState } from 'react';
import { useTable } from 'react-table';
// import './PermissionPage.css'; // Import custom CSS file for styling

const PermissionPage = () => {
  const [data, setData] = useState([
    { role: 'Admin', readAccess: false, writeAccess: false },
    { role: 'User', readAccess: false, writeAccess: false },
    { role: 'Guest', readAccess: false, writeAccess: false }
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: (
          <div className="multi-row-header">Roles</div>
        ),
        accessor: 'role'
      },
      {
        Header: 'Access',
        columns: [
          {
            Header: 'Read',
            accessor: 'readAccess',
            Cell: ({ row }) => (
              <input
                type="checkbox"
                checked={row.original.readAccess}
                onChange={() => handleCheckboxChange(row.index, 'readAccess')}
              />
            )
          },
          {
            Header: 'Write',
            accessor: 'writeAccess',
            Cell: ({ row }) => (
              <input
                type="checkbox"
                checked={row.original.writeAccess}
                onChange={() => handleCheckboxChange(row.index, 'writeAccess')}
              />
            )
          }
        ]
      }
    ],
    []
  );

  const handleCheckboxChange = (index, field) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index][field] = !newData[index][field];
      return newData;
    });
  };

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <div>
      <table {...getTableProps()} className="permissions-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <React.Fragment key={headerGroup.id}>
              <tr>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionPage;
