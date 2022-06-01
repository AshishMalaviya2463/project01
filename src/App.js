import './App.css';

function App() {
  const person = [
    {
      name: "Amit",
      age: 25,
    },
    {
      name: "Piyush",
      age: 40,
    },
  ];

  const person1 = {
    name: "Amit",
    age: 25,
    course: [
      "C",
      "HTML"
    ]
  }

  const person2 = [
    {
      name: "Amit",
      age: 25,
      course: [
        "C",
        "HTML"
      ]
    },
    {
      name: "Ajay",
      age: 40,
      course: [
        "Java",
        "JavaScript"
      ]
    }
  ]

  const myObj = {
    name: "John",
    age: 30,
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

  const data = {
    personal_info: {
      name: 'amit',
      age: 25,
      city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
      rwl: {
        admission: 50,
        vacant_seat: 10
      },
      rw2: {
        admission: 30,
        vacant_seat: 20
      },
      rw3: {
        admission: 25,
        vacant_seat: 25
      },
      rw4: {
        admission: 40,
        vacant_seat: 10
      }
    }
  }

  let medicine = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  let filterMedicine = medicine.filter((d) => d.status === true && d.expiry >= 2022);
  let redMedi = filterMedicine.reduce((acc , curr) => acc + curr.price , 0)

  let emp = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let filterEmp = emp.filter((d) => d.status === true);

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        {person.map((v , i) => {
          return (
            <>
              <tbody>
                <tr key={i}>
                  <td>{v.name}</td>
                  <td>{v.age}</td>
                </tr>
              </tbody>
            </>
          );

        })}
      </table>

      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th colSpan={2}>cource</th>
          </tr>
        </thead>
        <thead>
          {
            <tr>
              <td>{person1.name}</td>
              <td>{person1.age}</td>
              {
                person1.course.map((v , i) => {
                  return (
                    <>
                      <td key={i}>{v}</td>
                    </>
                  );
                })
              }
            </tr>
          }
        </thead>

      </table>

      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th colSpan={2}>cource</th>
          </tr>
        </thead>
        <tbody>
          {
            person2.map((v , i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{v.name}</td>
                    <td>{v.age}</td>
                    {
                      v.course.map((val , id) => {
                        return (
                          <>
                            <td key={id}>{val}</td>
                          </>
                        );
                      })
                    }
                  </tr>
                </>
              );
            })
          }
        </tbody>
      </table>

      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th colSpan={3}>cars</th>
          </tr>
          <tr>
            <th>-</th>
            <th>-</th>
            <th>car1</th>
            <th>car2</th>
            <th>car3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              <>
                <td>{myObj.name}</td>
                <td>{myObj.age}</td>
                <td>{myObj.cars.car1}</td>
                <td>{myObj.cars.car2}</td>
                <td>{myObj.cars.car3}</td>
              </>
            }
          </tr>
        </tbody>

      </table>

      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th colSpan={3}>cource</th>
            <th colSpan={8}>branches</th>
          </tr>
          <tr>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th colSpan={3}>-</th>
            <th colSpan={2}>rnw1</th>
            <th colSpan={2}>rnw2</th>
            <th colSpan={2}>rnw3</th>
            <th colSpan={2}>rnw4</th>
          </tr>
          <tr>
            <th>-</th>
            <th>-</th>
            <th>-</th>
            <th colSpan={3}>-</th>
            <th>admission</th>
            <th>vacant seat</th>
            <th>admission</th>
            <th>vacant seat</th>
            <th>admission</th>
            <th>vacant seat</th>
            <th>admission</th>
            <th>vacant seat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              <>
                <td>{data.personal_info.name}</td>
                <td>{data.personal_info.age}</td>
                <td>{data.personal_info.city}</td>
                {
                  data.courses.map((v , i) => {
                    return (
                      <td key={i}>{v}</td>
                    );
                  })
                }
                {
                  <>
                    <td>{data.branches.rwl.admission}</td>
                    <td>{data.branches.rwl.vacant_seat}</td>
                    <td>{data.branches.rw2.admission}</td>
                    <td>{data.branches.rw2.vacant_seat}</td>
                    <td>{data.branches.rw3.admission}</td>
                    <td>{data.branches.rw3.vacant_seat}</td>
                    <td>{data.branches.rw4.admission}</td>
                    <td>{data.branches.rw4.vacant_seat}</td>
                  </>
                }

              </>
            }
          </tr>
        </tbody>
      </table>

      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>expiry</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {
            filterMedicine.map((v , i) => {
              let { id, name, quantity, price, expiry, status } = v;
              return (
                <>
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{expiry}</td>
                    <td>{status.toString()}</td>
                  </tr>
                </>
              );
            })
          }
          <tr>
            <th colSpan={4}>Total price</th>
            <td colSpan={2}>{redMedi}</td>
          </tr>
        </tbody>
      </table>

      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>salary</th>
            <th>bonus</th>
            <th>status</th>
            <th>total salary of employee</th>
          </tr>
        </thead>
        <tbody>
          {
            filterEmp.map((v , i) => {
              let { name, age, salary, bonus, status } = v;
              let total = v.salary + v.bonus;
              return (
                <>
                  <tr key={i}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{salary}</td>
                    <td>{bonus}</td>
                    <td>{status.toString()}</td>
                    <td>{total}</td>
                  </tr>
                </>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
