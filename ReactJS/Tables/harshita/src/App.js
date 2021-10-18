import * as React from 'react';

import faker from 'faker';

let USERS = [];
let STATUSES = ["Already Applied", "Not Applied" ];

for(let i=0;i<20;i++){
    USERS[i] = {
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function App() {
    return (
    <div>
    <table>
        <tr>
          <th>Name</th>
          <th>Job Title</th>
          <th>Company</th>
          <th>Status</th>
        </tr>
        
        {
            USERS.map((user) => {
                return (
                    <tr>
                       <td>{user.name}</td>
                       <td>{user.jobTitle}</td>
                       <td>{user.company}</td>
                       <td>{user.status}</td>
                    </tr>
                )
            })
        }
    </table>
    </div>    

    )
}

export default App


