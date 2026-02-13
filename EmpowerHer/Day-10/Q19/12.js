const user = {
    name: "Alex",
    address: {
      city: "Bangalore"
    }
  };
  const city = user.address?.city;
  console.log(city);
  
  const User = {
    Name: "Alex",
    Address: {
      City: "Bangalore"
    }
  };
  
  
  const jobTitle = User.job?.title;
  console.log(jobTitle);
  
  const company = {
    name: "Tech Corp"
  };
  const employeeCount = company.employees?.length;
  console.log(employeeCount);