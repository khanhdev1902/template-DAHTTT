<!-- 
project/
├── src/
│   ├── domain/                # ❌ Core domain layer: thuần entity + interface repository
│   │   ├── models/            # Entity/model nghiệp vụ
│   │   │   └── SinhVien.js    # Lớp SinhVien (id, name, age...)
│   │   └── repositories/      # Interface repository (abstract)
│   │       └── SinhVienRepository.js
│   │
│   ├── usecases/              # ❌ Logic nghiệp vụ
│   │   └── SinhVienUseCase.js # Xử lý nghiệp vụ SinhVien, gọi repository interface
│   │
│   ├── infrastructure/        # ❌ Adapter & persistence layer
│   │   ├── config/            # Cấu hình DB, env
│   │   │   └── db.js          # Sequelize connection + sync
│   │   ├── sequelize/         # Sequelize models (mapping DB)
│   │   │   └── SinhVienModel.js
│   │   └── repositories/      # Repository triển khai interface domain
│   │       └── SinhVienRepositoryImpl.js
│   │
│   ├── presentation/          # ❌ Presentation layer: controller & route
│   │   ├── controllers/       # REST API controllers
│   │   │   └── SinhVienController.js
│   │   └── routes/            # API route mapping
│   │       └── sinhVienRoutes.js
│   │
│   ├── middlewares/           # (Optional) middlewares: auth, logging, error handler
│   ├── validators/            # (Optional) validate input (Joi/Yup)
│   └── utils/                 # (Optional) helper functions
│
├── app.js                     # Entry point: load server, routes, DB
├── package.json
├── .env                       # Config environment variables: DB, ports, etc
└── README.md                  # Hướng dẫn project

Client (FE) 
   │
   │ HTTP Request (GET/POST/etc)
   ▼
Presentation Layer
   ├─ Route (/sinhvien)
   ▼
Controller (SinhVienController)
   │  - Nhận req, validate input
   │  - Gọi UseCase tương ứng
   ▼
Usecase Layer (SinhVienUseCase)
   │  - Xử lý nghiệp vụ
   │  - Gọi Repository Interface (domain)
   ▼
Infrastructure Layer (SinhVienRepositoryImpl)
   │  - Triển khai bằng Sequelize
   │  - Thực hiện query tới DB
   ▼
Database (MySQL/PostgreSQL/...)
   │
   │ Query kết quả (SELECT/INSERT/UPDATE/DELETE)
   ▼
Infrastructure Layer
   └─ Trả kết quả về UseCase
Usecase Layer
   └─ Trả kết quả về Controller
Controller
   └─ Trả JSON response về Client 
-->
