# Documentation

## 1. Architecture

### 1.1 System components
1.) [WebClient](../../src/client/web/angular/README.md) - user interaction  
2.) [AppServer](../../src/server/app/expressjs/README.md) - non user related business logic  
3.) [AppDatabase](../../src/db/app/elasticsearch/README.md) - non user related data  
4.) [IdentityServer](../../src/server/identity/expressjs/README.md) - user related business logic  
5.) [IdentityDatabase](../../src/db/identity/postgres/README.md) - user related data

![Image](./system-components.jpg)  
see [UML](./system-components.uxf) for more detailed info
