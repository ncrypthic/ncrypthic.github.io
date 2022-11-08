### Nov 2021 - Current
{: .experience }

{: .position }
Senior Software Engineer [at Pintu](https://www.pintu.co.id)

{: .tech-stack}
Stack
: Golang
: gRPC
: NodeJS
: Typescript
: MongoDB
: PostgreSQL
: Opentelemetry

{: .responsibility }
- Successfully migrate and modernize technology stack whole customer related domain. Modernization includes rewriting legacy services written in Typescript and Nodejs to Golang.
- Migrate all customers data (profile, bank accounts, settings, contacts, etc.) from MongoDB to PostgreSQL using custom scripts for batch process migration without disrupting production.
- Implement caching to Redis for high traffic APIs in the new service
- Implement business metrics instrumentation in new user service as data source for implementing SLOs.
- With other individual contributors, I joined Architecture team to refine Pintu engineering standardization to leverage engineering excellence and productivity. Define standardization for deployments pipeline to AWS EKS and self managed Nomad container orchestration. Define standardization for gRPC error propagation.

### Sep 2020 - Aug 2021
{: .experience }

{: .position }
Squad Leader [at LinkAja](https://linkaja.id)

{: .tech-stack}
Tech stack
: NodeJS
: Java
: Golang
: GCP
: Gitlab
: PostgreSQL
: MySQL
: MongoDB
: Kafka

{: .responsibility }
- Implement OTP hourly & daily requests limit reducing OTP cost by 70%. The limit counter
- Successfully create a centralized feature flagging mechanism to reduce inconsistency user flagging data spread across multiple micro services that causes bad user experience. Aggregate all user flags to Google Cloud Bigquery and create a highly reliable feature flag serving APIs for other services to check for a user flag value.
- Create PoC for custom tools for deployment to Kubernetes in GCP GKE that directly call K8s API server. This is to shorten build & deployment time of the CD pipeline and reducing potential errors in multiple stage of the long pipeline.
- Collaborate with automation team to build deployment pipeline from gitlab repository to GKE.
- Collaborate with datateam to send users activity events to Data team via Kafka to be analyzed with internal fraud detection system.
- Create dashboard to monitor OTP requests in Kibana

### Jun 2019 - Aug 2020
{: .experience }

{: .position }
Technical Lead [at Ruangguru](https://ruangguru.com)

{: .tech-stack}
Tech stack
: Golang
: gRPC
: GKE
: MySQL
: Redis
: Antlr
: Kubernetes
: Python

{: .responsibility }
- Design and and implement new product architecture by mostly reusing most of Ruangguru existing microservices. The design was implemented and used for initial launch of the product.
- Proposed, research and making proof-of-concept of secure video delivery on web browsers using international HTML5.1 Encrypted Media Extension and major DRM implementation (Widevine, PlayReady and FairPlay)
- Improve video publishing pipeline written in Python to implement video production with encryption to be used by HTML5.1 EME compliant browsers.
- Initiate initiative to standardize evaluation question authoring & delivery process across between web & mobile. The approach was using custom question DSL for declarative question authoring process and create SDK for rendering the DSL on client application.
- Core Content delivery team responsible to handle backend services of content related micro services from authoring a content and provide it to the client application. This includes content creation REST APIs on administration app by content writer, to content delivery APIs to be used by customer facing application.
- Conduct loadtesting & improve mission critical APIs to meet company SLA. Load testing done by leveraging Kuberenetes Job to generate request to internal service. Performance gain mostly done by leveraging cache using Redis or doing background process with eventual consistency where possible.

<!-- ### Footer

Last updated: May 2013 -->
