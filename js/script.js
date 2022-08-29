async function getUsers() {
  let url = 'https://my-json-server.typicode.com/KodeKenobi/resultsapi/results/';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
      //let htmlSegment = `<div class="user">
      //                    <img src="${user.profileURL}" >
      //                    <h2>${user.firstName} ${user.lastName}</h2>
      //                    <div class="email"><a href="email:${user.email}">${user.email}</a></div>
      //                </div>`;

      let htmlSegment = `
      <!-- Begin Widget -->
      <div class="widget has-shadow">
        <div class="widget-body">
            <div class="mt-5">
                <img src="assets/img/logo.png" alt="..." style="width: 120px;" class="avatar rounded-circle d-block mx-auto">
            </div>
            <h1 class="text-center">Amber Software Assessment</h1>
            <h3 class="text-center mt-3 mb-1">${user.name.title} ${user.name.first} ${user.name.last}</h3>
            <p class="text-center">${user.email}</p>
            <div class="em-separator separator-dashed"></div>

            <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="${user.picture.large}" alt="Card image cap">
              <div style="background:oldlace" class="card-body">
                <h5 class="card-title text-center">Picture Large</h5>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="${user.picture.medium}" alt="Card image cap">
              <div style="background:oldlace" class="card-body">
                <h5 class="card-title text-center">Picture Medium</h5>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="${user.picture.thumbnail}" alt="Card image cap">
              <div style="background:oldlace !important" class="card-body">
                <h5 class="card-title text-center">Picture Thumbnail</h5>
              </div>
            </div>
          </div>
          <div class="text-center nav flex-column card" style="margin-top: 20px";>
            <ul class="text-center nav flex-column">
                <li class="nav-item" style="margin-top: 20px";>
                    <a class="nav-link"><i class="align-middle pr-2"></i>Location: ${user.location.street.name} ${user.location.street.number} ${user.location.city} ${user.location.state} ${user.location.country}</a>
                    <a class="nav-link"><i class="align-middle pr-2"></i>Postcode: ${user.location.postcode} ${user.location.coordinates.latitude} ${user.location.coordinates.longitude}</a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Timezone: ${user.location.timezone.offset} ${user.location.timezone.description}</a>
                </li>

                <div class="em-separator separator-dashed"></div>                


                <li class="nav-item">
                    <a class="nav-link"><i class="la la-gears la-2x align-middle pr-2"></i>LOGIN DETAILS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Email: ${user.email}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>UUID: ${user.login.uuid}</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Username: ${user.login.username}</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Password: ${user.login.password}</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Salt: ${user.login.salt}</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>MD5: ${user.login.md5}</a>
                </li>   
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>SHA1: ${user.login.sha1}</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>SHA256: ${user.login.sha256}</a>
                </li>                                                      

                <div class="em-separator separator-dashed"></div>                  


                <li class="nav-item">
                    <a class="nav-link"><i class="la la-gears la-2x align-middle pr-2"></i>DATE OF BIRTH</a>
                </li>                
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Date of Birth: ${user.dob.date}</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Age: ${user.dob.age}</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Age: ${user.registered.date}</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Age: ${user.registered.age}</a>
                </li> 
                
                
                <div class="em-separator separator-dashed"></div>                  


                <li class="nav-item">
                    <a class="nav-link"><i class="la la-gears la-2x align-middle pr-2"></i>PERSONAL DETAILS</a>
                </li>                
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Phone: ${user.phone}</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Cell: ${user.cell}</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Name: ${user.id.name}</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>Value: ${user.id.value}</a>
                </li>   
                <li class="nav-item">
                    <a class="nav-link"><i class="align-middle pr-2"></i>NAT: ${user.nat}</a>
                </li>                                 
            </ul>
          </div>  
        </div>
      </div>
      <!-- End Widget -->      
      `;                

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderUsers();