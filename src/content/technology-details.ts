/**
 * Per-technology and per-category copy for /technologies/[category] and
 * /technologies/[category]/[slug].
 *
 * Names, slugs and icons live in `technologies.ts` (shared with the header and
 * home page). This file only adds the long-form copy, keyed by `<category>/<slug>`
 * for technologies and by category id for category-level sections.
 *
 * Values marked TODO(confirm) are placeholders: figures and project references
 * must be replaced with real, verifiable Arki Tech data before launch.
 */

export type TechFeature = { title: string; text: string };

export type TechDetail = {
  /** What the technology is: shown in the hero and in tool grids. */
  description: string;
  /** How Arki uses it: shown as the intro of the services section. */
  usage: string;
  /** Three things we build with it. */
  features: [TechFeature, TechFeature, TechFeature];
};

/** lucide icon keys understood by `src/components/technologies/icons.ts`. */
export type TechIconKey =
  | "shield" | "gauge" | "accessibility" | "search" | "blocks" | "globe" | "users" | "layers" | "zap" | "code"
  | "layout" | "smartphone" | "settings" | "cpu" | "brain" | "eye" | "database" | "server" | "cloud" | "lock"
  | "workflow" | "activity" | "git" | "box" | "chart" | "refresh" | "plug" | "wallet" | "languages" | "wifiOff"
  | "target" | "star" | "rocket" | "lineChart" | "boxes" | "shoppingCart" | "fileText" | "bell" | "clock" | "hardDrive";

export type ExpertiseArea = { icon: TechIconKey; title: string; text: string; bullets: string[] };
export type Capability = { title: string; text: string };
export type Stat = { value: string; label: string };

export type CategoryDetail = {
  /** Hero h1: highlighted lead word(s) + rest. */
  heroHighlight: string;
  heroRest: string;
  heroLead: string;
  /** Six one-line specs next to the category hero. */
  specs: { icon: TechIconKey; text: string }[];
  /** Primary button on technology pages. */
  techCta: string;
  /** Four "Engineering Excellence" / "expertise areas" cards. */
  expertise: ExpertiseArea[];
  /** Eight solutions; the first four double as "Platform Capabilities". */
  solutions: Capability[];
  /** Four "technical challenges we solve". */
  challenges: string[];
  /** Six "choose us because" items. */
  chooseUs: { icon: TechIconKey; title: string; text: string }[];
  /** TODO(confirm): replace with real, verifiable figures. */
  stats: Stat[];
  /** Sample case studies (slugs from case-studies.ts) shown on the category page. */
  caseStudySlugs: string[];
  /** Case study snapshot / client spotlight. TODO(confirm): based on a SAMPLE project. */
  spotlight: { slug: string; challenge: string; solution: string; result: string; metric: Stat };
  faqs: { q: string; a: string }[];
};

type F = [string, string];
const t = (description: string, usage: string, features: [F, F, F]): TechDetail => ({
  description,
  usage,
  features: features.map(([title, text]) => ({ title, text })) as TechDetail["features"],
});

export const techDetails: Record<string, TechDetail> = {
  /* ---------------------------------------------------------------- AI & ML */
  "ai-machine-learning/openai": t(
    "OpenAI provides the GPT family of large language models, embeddings, image and speech models through a managed API used by thousands of production applications.",
    "We use the OpenAI API to add assistants, document understanding and structured data extraction to products, with retrieval, evaluation and cost controls built in from the start.",
    [
      ["Assistants with tool calling", "Chat and agent features that call your own APIs through function calling and return validated, structured output."],
      ["Embeddings and semantic search", "Vector search over your documents so answers are grounded in your own content, not the model's memory."],
      ["Speech and vision features", "Transcription, image understanding and content generation wired into existing workflows with human review where it matters."],
    ],
  ),
  "ai-machine-learning/tensorflow": t(
    "TensorFlow is Google's open-source machine learning platform, covering data pipelines, model training, serving and on-device inference.",
    "We use TensorFlow when a model has to run reliably in production at scale or on a phone, from training pipelines through TensorFlow Serving and TensorFlow Lite.",
    [
      ["Model training pipelines", "Reproducible tf.data input pipelines and distributed training for vision, text and tabular models."],
      ["Production model serving", "Versioned models behind TensorFlow Serving with batching, monitoring and safe rollbacks."],
      ["On-device inference", "Quantised TensorFlow Lite models that run offline on Android and iOS devices."],
    ],
  ),
  "ai-machine-learning/pytorch": t(
    "PyTorch is an open-source deep learning framework, governed by the PyTorch Foundation, known for its Pythonic API and eager execution that makes models easy to build and debug.",
    "We use PyTorch for research-grade and custom deep learning work: fine-tuning open models, building bespoke architectures and exporting them for efficient inference.",
    [
      ["Custom deep learning models", "Vision, NLP and sequence models designed around your data rather than forced into a template."],
      ["Fine-tuning open models", "Parameter-efficient fine-tuning (LoRA) of open-weight models on domain data, including Amharic and Afaan Oromo text."],
      ["Optimised inference", "torch.compile, quantisation and ONNX export to cut latency and serving cost."],
    ],
  ),
  "ai-machine-learning/langchain": t(
    "LangChain is an open-source framework for building applications on large language models, with building blocks for retrieval, tools, agents and, through LangGraph, stateful workflows.",
    "We use LangChain and LangGraph to orchestrate retrieval-augmented generation and multi-step agents, with tracing and evaluation so behaviour stays predictable.",
    [
      ["Retrieval-augmented generation", "Document loaders, chunking and retrievers that ground answers in your knowledge base with citations."],
      ["Agent workflows", "LangGraph state machines for agents that plan, call tools and hand over to a human when unsure."],
      ["Model-agnostic design", "Swap between hosted and open models without rewriting application logic."],
    ],
  ),
  "ai-machine-learning/hugging-face": t(
    "Hugging Face hosts the largest open hub of pre-trained models and datasets and maintains the Transformers, Datasets and related libraries used across applied machine learning.",
    "We use Hugging Face to find, evaluate and fine-tune open models, including multilingual models that handle Amharic and Afaan Oromo, and to host them privately.",
    [
      ["Open model selection", "Benchmarking candidate models from the Hub on your own data before committing to one."],
      ["Transformers fine-tuning", "Text classification, named entity recognition and translation models tuned on domain data."],
      ["Private model hosting", "Self-hosted or managed inference endpoints so sensitive data stays under your control."],
    ],
  ),
  "ai-machine-learning/scikit-learn": t(
    "Scikit-learn is the standard Python library for classical machine learning, with consistent APIs for classification, regression, clustering, preprocessing and model selection.",
    "We use scikit-learn for fast, explainable models on tabular data, often as the baseline every deep learning approach has to beat.",
    [
      ["Predictive models", "Churn, credit risk, demand and fraud models built on clean, versioned feature pipelines."],
      ["Reusable pipelines", "Preprocessing and model steps bundled into one Pipeline object so training and serving match."],
      ["Model evaluation", "Cross-validation, calibration and clear metrics that business stakeholders can follow."],
    ],
  ),
  "ai-machine-learning/numpy": t(
    "NumPy is the foundation of scientific computing in Python, providing fast N-dimensional arrays and vectorised mathematical operations.",
    "We use NumPy underneath nearly every data and ML workload, writing vectorised code that replaces slow loops in feature engineering and numerical processing.",
    [
      ["Vectorised numerical code", "Array operations that turn minutes of Python loops into milliseconds."],
      ["Feature engineering", "Efficient transforms on signals, images and tabular data before modelling."],
      ["Scientific computation", "Linear algebra, statistics and simulation code that is tested and reproducible."],
    ],
  ),
  "ai-machine-learning/pandas": t(
    "Pandas is the go-to Python library for data manipulation and analysis, built around the DataFrame for cleaning, joining and reshaping tabular data.",
    "We use pandas to explore and prepare data, from messy spreadsheets and exports to analysis-ready datasets that feed models and reports.",
    [
      ["Data cleaning", "Handling missing values, inconsistent formats and duplicates in real-world business data."],
      ["Exploratory analysis", "Quick, documented analysis that answers what the data can and cannot support."],
      ["Reporting pipelines", "Scheduled jobs that turn raw exports into clean tables and summaries."],
    ],
  ),
  "ai-machine-learning/keras": t(
    "Keras is a high-level deep learning API; Keras 3 runs on TensorFlow, JAX or PyTorch backends with the same model code.",
    "We use Keras to prototype and ship neural networks quickly, keeping models readable for the teams that will maintain them.",
    [
      ["Rapid prototyping", "Clear Sequential and Functional models that let us test ideas in days, not weeks."],
      ["Transfer learning", "Pre-trained image and text backbones adapted to your categories with modest data."],
      ["Backend flexibility", "Models that can move between TensorFlow, JAX and PyTorch as needs change."],
    ],
  ),
  "ai-machine-learning/apache-spark": t(
    "Apache Spark is a distributed engine for large-scale data processing, with Spark SQL, Structured Streaming and the MLlib machine learning library.",
    "We use Spark, mostly through PySpark, when datasets outgrow a single machine: batch ETL, streaming features and distributed model training.",
    [
      ["Large-scale ETL", "Batch pipelines that process transaction logs and event data across a cluster."],
      ["Streaming analytics", "Structured Streaming jobs that compute features and alerts in near real time."],
      ["Distributed ML", "MLlib and distributed training for models that need the full dataset."],
    ],
  ),
  "ai-machine-learning/python": t(
    "Python is the primary language of data science and machine learning, with a mature ecosystem spanning data processing, modelling and model serving.",
    "We write production Python for ML: typed, tested code with packaged models served through FastAPI, not notebooks left running on a laptop.",
    [
      ["Model serving APIs", "FastAPI services that wrap models with validation, batching and monitoring."],
      ["Data and ML pipelines", "Scheduled, observable pipelines from raw data to trained, versioned models."],
      ["Notebook to production", "Turning research notebooks into maintainable packages with tests and CI."],
    ],
  ),
  "ai-machine-learning/opencv": t(
    "OpenCV is the most widely used open-source computer vision library, with optimised C++ code and Python bindings for image processing and video analysis.",
    "We use OpenCV for image pre-processing and real-time vision pipelines, often alongside deep learning models for detection and recognition.",
    [
      ["Document and ID processing", "Deskewing, cropping and enhancement before OCR on scanned forms and IDs."],
      ["Video analytics", "Camera pipelines for counting, tracking and quality inspection."],
      ["Edge vision", "Lightweight pipelines that run on low-cost hardware close to the camera."],
    ],
  ),

  /* ---------------------------------------------------------------- Mobile */
  "mobile-development/kotlin": t(
    "Kotlin is a modern, statically typed language from JetBrains and Google's preferred language for Android, with null safety, coroutines and Jetpack Compose for UI.",
    "We use Kotlin for native Android apps that need the best performance and deepest platform access, and Kotlin Multiplatform to share logic where it pays off.",
    [
      ["Jetpack Compose UIs", "Declarative, testable Android interfaces that follow Material Design."],
      ["Offline-first data", "Room, WorkManager and sync logic so apps keep working on unreliable networks."],
      ["Kotlin Multiplatform", "Shared business logic across Android and iOS while keeping native UIs."],
    ],
  ),
  "mobile-development/swift": t(
    "Swift is Apple's fast, safe programming language for iOS, iPadOS, macOS and watchOS, with SwiftUI for declarative interfaces and built-in async/await concurrency.",
    "We use Swift for native iOS apps that feel at home on Apple devices, from SwiftUI screens to background processing and secure storage.",
    [
      ["SwiftUI interfaces", "Native iOS screens with accessibility, Dynamic Type and dark mode supported from day one."],
      ["Structured concurrency", "async/await networking and data layers that stay responsive and easy to reason about."],
      ["Platform integrations", "Push notifications, Keychain, camera, maps and in-app purchases done the Apple way."],
    ],
  ),
  "mobile-development/flutter": t(
    "Flutter is Google's open-source UI toolkit for building apps for mobile, web and desktop from a single Dart codebase, rendering its own widgets for consistent results.",
    "We use Flutter when one team needs to ship polished Android and iOS apps together, with a single codebase that stays fast on low-end devices.",
    [
      ["Cross-platform apps", "One codebase for Android and iOS with pixel-consistent design."],
      ["Low-end device performance", "Lean builds and careful rendering so apps stay smooth on budget Android phones."],
      ["Native integrations", "Platform channels for payments, biometrics and hardware features."],
    ],
  ),
  "mobile-development/reactnative": t(
    "React Native is Meta's open-source framework for building native mobile apps with React and JavaScript or TypeScript, rendering real platform components.",
    "We use React Native, usually with Expo, when a product already has a React web team and wants to share skills, logic and design tokens with mobile.",
    [
      ["Shared React expertise", "Mobile apps built by the same TypeScript and React skills as your web product."],
      ["Over-the-air updates", "Expo updates for fast fixes between app store releases."],
      ["Native modules", "Custom native code where the JavaScript layer is not enough."],
    ],
  ),
  "mobile-development/java-android": t(
    "Java was Android's original development language and still powers a large share of existing Android apps, with full interoperability with Kotlin.",
    "We maintain and extend Java Android codebases and migrate them to Kotlin incrementally, file by file, without stopping feature work.",
    [
      ["Legacy app maintenance", "Bug fixes, SDK upgrades and Play Store policy updates for existing Java apps."],
      ["Incremental Kotlin migration", "Mixing Java and Kotlin safely while modernising one module at a time."],
      ["Performance fixes", "Profiling memory, startup time and battery use in mature apps."],
    ],
  ),
  "mobile-development/ionic": t(
    "Ionic is an open-source toolkit for building mobile and web apps with web technologies and Angular, React or Vue, using Capacitor to reach native device APIs.",
    "We use Ionic and Capacitor when a web team needs to ship an installable app quickly from an existing web codebase.",
    [
      ["Web-to-mobile apps", "Turning an existing web app into store-ready Android and iOS apps."],
      ["Capacitor plugins", "Camera, geolocation, push and file access through native bridges."],
      ["Shared UI components", "One component library serving web, Android and iOS."],
    ],
  ),
  "mobile-development/objectivec": t(
    "Objective-C is Apple's original language for iOS and macOS development and remains in many established apps and SDKs, interoperating with Swift.",
    "We maintain Objective-C codebases and bridge them to Swift, so mature apps can adopt modern features without a risky rewrite.",
    [
      ["Legacy iOS maintenance", "Keeping older apps compatible with new iOS versions and App Store rules."],
      ["Swift interoperability", "Bridging headers and gradual migration of modules to Swift."],
      ["SDK integration", "Working with third-party and in-house SDKs written in Objective-C."],
    ],
  ),
  "mobile-development/fastlane": t(
    "Fastlane is an open-source tool that automates mobile build and release tasks such as code signing, screenshots, beta distribution and store submission.",
    "We use Fastlane in CI so every Android and iOS build is signed, tested and delivered to testers or the stores the same way, every time.",
    [
      ["Automated releases", "One command, or one merge, to ship builds to TestFlight and Google Play."],
      ["Code signing management", "Shared, encrypted certificates and profiles with match."],
      ["Store metadata", "Screenshots and release notes generated and uploaded automatically."],
    ],
  ),
  "mobile-development/firebase-mobile": t(
    "Firebase is Google's app development platform, offering authentication, Cloud Firestore, Cloud Messaging, Crashlytics, Remote Config and analytics for mobile apps.",
    "We use Firebase to give mobile apps reliable push notifications, crash reporting and feature flags without building that infrastructure from scratch.",
    [
      ["Push notifications", "Firebase Cloud Messaging for targeted, scheduled and transactional notifications."],
      ["Crash and performance monitoring", "Crashlytics and Performance Monitoring wired into release workflows."],
      ["Remote configuration", "Feature flags and staged rollouts through Remote Config."],
    ],
  ),
  "mobile-development/android-sdk": t(
    "The Android SDK provides the platform APIs, build tools, emulators and Jetpack libraries used to build apps for Android devices.",
    "We work directly with the Android SDK for hardware access, background work and the device fragmentation that Android apps face in real markets.",
    [
      ["Device compatibility", "Apps tested across Android versions and the low-cost devices common in emerging markets."],
      ["Background work", "Reliable sync, uploads and notifications within Android's battery rules."],
      ["Hardware access", "Camera, Bluetooth, NFC and location features built on platform APIs."],
    ],
  ),
  "mobile-development/ios-sdk": t(
    "The iOS SDK is Apple's set of frameworks and tools, including UIKit, SwiftUI, Core Data and Xcode, for building apps across Apple devices.",
    "We build on the iOS SDK to use platform capabilities fully and to get apps through App Store review without surprises.",
    [
      ["Platform frameworks", "Core Data, Core Location, AVFoundation and more, used as Apple intends."],
      ["App Store readiness", "Privacy manifests, permissions copy and review guidelines handled up front."],
      ["TestFlight distribution", "Structured beta programmes with feedback loops before launch."],
    ],
  ),
  "mobile-development/xamarin": t(
    "Xamarin was Microsoft's C#/.NET framework for cross-platform mobile apps; official support ended in May 2024 and its successor is .NET MAUI.",
    "We support teams with existing Xamarin apps: stabilising them, then planning and executing the migration to .NET MAUI.",
    [
      ["Xamarin app stabilisation", "Keeping existing apps building and compliant while a migration is planned."],
      ["Migration to .NET MAUI", "Moving Xamarin.Forms projects to .NET MAUI with a phased, tested plan."],
      ["Shared C# business logic", "Preserving and modernising the .NET code your team already owns."],
    ],
  ),

  /* -------------------------------------------------------------- Frontend */
  "frontend-engineering/react": t(
    "React is the most widely used library for building component-based user interfaces, maintained by Meta and a large open-source community.",
    "We use React for interactive web products and dashboards, with typed components, tested state management and design systems your team can extend.",
    [
      ["Component-driven UI", "Reusable, documented components that keep large interfaces consistent."],
      ["Complex state and data", "Server state with TanStack Query, client state kept small and predictable."],
      ["Accessible interfaces", "Keyboard support, focus management and ARIA patterns tested in CI."],
    ],
  ),
  "frontend-engineering/nextjs": t(
    "Next.js is a React framework from Vercel with server components, server-side rendering, static generation, routing and image optimisation built in.",
    "We use Next.js for marketing sites, portals and SaaS products that need fast first loads, good SEO and a clean full-stack React setup.",
    [
      ["App Router architectures", "Server components and streaming for fast pages with less client JavaScript."],
      ["SEO-ready rendering", "Static generation, incremental revalidation and metadata for discoverable pages."],
      ["Full-stack React", "Route handlers and server actions that keep simple backends in one codebase."],
    ],
  ),
  "frontend-engineering/angular": t(
    "Angular is Google's TypeScript-first framework for large web applications, with dependency injection, routing, forms and signals included.",
    "We use Angular for enterprise applications where structure, strong conventions and long-term maintainability matter most.",
    [
      ["Enterprise applications", "Large, multi-team apps with clear module boundaries and shared libraries."],
      ["Complex forms", "Reactive forms with validation for data-heavy business workflows."],
      ["Upgrades and modernisation", "Moving older Angular apps to current versions, standalone components and signals."],
    ],
  ),
  "frontend-engineering/vuejs": t(
    "Vue.js is a progressive JavaScript framework that can be adopted incrementally, from a widget on an existing page to a full single-page application.",
    "We use Vue with the Composition API, Pinia and Nuxt for approachable, fast interfaces, and to modernise legacy pages one piece at a time.",
    [
      ["Single-page applications", "Vue 3 apps with typed Composition API code and Pinia stores."],
      ["Nuxt for SSR", "Server-rendered Vue sites with good SEO and fast first loads."],
      ["Incremental adoption", "Adding Vue to server-rendered pages without a big-bang rewrite."],
    ],
  ),
  "frontend-engineering/svelte": t(
    "Svelte is a compiler-based UI framework that moves work to build time, producing small bundles without a virtual DOM; SvelteKit adds routing and server rendering.",
    "We use Svelte and SvelteKit where bundle size and runtime performance are critical, such as content sites and lightweight interactive tools.",
    [
      ["Small, fast bundles", "Minimal JavaScript shipped to the browser, ideal for slow networks."],
      ["SvelteKit applications", "File-based routing, server rendering and form actions in one framework."],
      ["Fine-grained reactivity", "Svelte 5 runes for clear, predictable state updates."],
    ],
  ),
  "frontend-engineering/typescript": t(
    "TypeScript is Microsoft's typed superset of JavaScript that catches errors at compile time and makes large codebases easier to navigate and refactor.",
    "We write all new frontend code in TypeScript, sharing types between client and API so whole classes of bugs never reach users.",
    [
      ["End-to-end type safety", "Types generated from API schemas and shared across the stack."],
      ["Safer refactoring", "Large changes made with confidence because the compiler checks every call site."],
      ["JavaScript migration", "Gradual adoption in existing JavaScript projects, strictness raised step by step."],
    ],
  ),
  "frontend-engineering/javascript": t(
    "JavaScript is the programming language of the web, running in every browser and, through modern ECMAScript standards, across servers and tools.",
    "We write modern, standards-based JavaScript and modernise older jQuery-era code into maintainable modules.",
    [
      ["Modern ECMAScript", "ES modules, async/await and current language features with sensible build targets."],
      ["Legacy modernisation", "Untangling jQuery and global scripts into tested modules."],
      ["Performance tuning", "Smaller bundles, code splitting and less main-thread work."],
    ],
  ),
  "frontend-engineering/html5": t(
    "HTML5 is the current standard for web markup, with semantic elements, native form validation, media and the accessibility foundations every page depends on.",
    "We start every interface with semantic, accessible HTML so pages work for screen readers, search engines and slow connections before any JavaScript loads.",
    [
      ["Semantic markup", "Landmarks, headings and native elements that make pages understandable."],
      ["Accessible forms", "Labels, validation messages and input types that work for everyone."],
      ["Progressive enhancement", "Core content and actions that work even when scripts fail."],
    ],
  ),
  "frontend-engineering/tailwindcss": t(
    "Tailwind CSS is a utility-first CSS framework for building custom designs directly in markup, with design tokens and only the CSS you use shipped to production.",
    "We use Tailwind to implement design systems quickly and consistently, with tokens defined once and reused across every component.",
    [
      ["Design token systems", "Colours, spacing and typography defined once in the theme and used everywhere."],
      ["Responsive layouts", "Mobile-first interfaces with consistent breakpoints."],
      ["Small CSS output", "Only the utilities in use are generated, keeping stylesheets lean."],
    ],
  ),
  "frontend-engineering/bootstrap": t(
    "Bootstrap is a popular open-source CSS framework with a responsive grid and ready-made components; version 5 dropped its jQuery dependency.",
    "We maintain and modernise Bootstrap-based products and use it where a team needs a well-known, documented component set.",
    [
      ["Responsive grid layouts", "Fast, consistent layouts with Bootstrap's grid and utilities."],
      ["Custom themes", "Sass variables tuned to your brand instead of the default look."],
      ["Version upgrades", "Moving Bootstrap 3 and 4 projects to Bootstrap 5."],
    ],
  ),
  "frontend-engineering/materialui": t(
    "Material UI (MUI) is a React component library implementing Google's Material Design, with a theming system and advanced components such as MUI X data grids.",
    "We use MUI for admin panels and internal tools that need many polished components quickly, themed to match your brand.",
    [
      ["Admin dashboards", "Data grids, filters and forms for operations teams."],
      ["Custom theming", "Brand colours, typography and component overrides in one theme."],
      ["Accessible components", "Keyboard-ready inputs, dialogs and menus out of the box."],
    ],
  ),
  "frontend-engineering/redux": t(
    "Redux is a predictable state container for JavaScript apps; Redux Toolkit is the official, recommended way to write Redux, with RTK Query for data fetching.",
    "We use Redux Toolkit where many parts of an app share complex state, and help teams simplify older Redux code.",
    [
      ["Redux Toolkit setup", "Slices and typed hooks that cut boilerplate."],
      ["RTK Query data fetching", "Caching, invalidation and loading states handled consistently."],
      ["Legacy Redux cleanup", "Refactoring hand-written reducers and middleware to modern patterns."],
    ],
  ),

  /* --------------------------------------------------------------- Backend */
  "backend-engineering/nodejs": t(
    "Node.js is a JavaScript runtime built on Chrome's V8 engine, using event-driven, non-blocking I/O that suits APIs, real-time services and tooling.",
    "We use Node.js for APIs and real-time services where one TypeScript language across frontend and backend speeds teams up.",
    [
      ["REST and GraphQL APIs", "Typed, documented APIs with validation and consistent error handling."],
      ["Real-time services", "WebSockets and event streams for chat, tracking and live dashboards."],
      ["Background workers", "Queues and scheduled jobs for notifications, imports and reports."],
    ],
  ),
  "backend-engineering/nestjs": t(
    "NestJS is a TypeScript framework for Node.js with modules, dependency injection and decorators, supporting REST, GraphQL, WebSockets and microservices.",
    "We use NestJS for structured backends that several developers work on at once, where clear modules and testability matter.",
    [
      ["Modular API backends", "Feature modules with clear boundaries, guards and interceptors."],
      ["Microservices", "Message-based services over Redis, NATS or Kafka transports."],
      ["Testable architecture", "Dependency injection that makes unit and integration tests straightforward."],
    ],
  ),
  "backend-engineering/python": t(
    "Python is a readable, general-purpose language with mature web frameworks such as Django, FastAPI and Flask and direct access to the data and AI ecosystem.",
    "We build Python backends with FastAPI and Django, especially when a product's API sits next to data processing or machine learning.",
    [
      ["FastAPI services", "Async APIs with automatic OpenAPI documentation and Pydantic validation."],
      ["Data-heavy backends", "APIs that sit close to analytics, ML models and scheduled data jobs."],
      ["Integrations and scripting", "Glue code connecting payment providers, ERPs and third-party APIs."],
    ],
  ),
  "backend-engineering/django": t(
    "Django is a batteries-included Python web framework with an ORM, migrations, authentication and an automatic admin interface.",
    "We use Django and Django REST Framework to deliver secure, data-driven platforms quickly, with an admin that operations teams can use from day one.",
    [
      ["Admin-backed platforms", "Customised Django admin for internal operations and content."],
      ["REST APIs", "Django REST Framework APIs with permissions, throttling and pagination."],
      ["Secure by default", "Built-in protection against CSRF, SQL injection and XSS, kept up to date."],
    ],
  ),
  "backend-engineering/spring-boot": t(
    "Spring Boot makes it fast to build production-ready Java applications on the Spring ecosystem, with auto-configuration, embedded servers and Spring Security.",
    "We use Spring Boot for enterprise and banking-grade services that need strong typing, mature tooling and integration with existing Java systems.",
    [
      ["Enterprise services", "Transactional services with Spring Data, validation and audit logging."],
      ["Security and identity", "Spring Security with OAuth 2.0, OpenID Connect and role-based access."],
      ["System integration", "Connecting core banking, ERP and messaging systems through well-defined APIs."],
    ],
  ),
  "backend-engineering/dotnetcore": t(
    ".NET (formerly .NET Core) is Microsoft's open-source, cross-platform framework; ASP.NET Core and Entity Framework Core power web APIs and services on Windows and Linux.",
    "We build and modernise .NET services, including migrating .NET Framework applications to current .NET running in containers.",
    [
      ["ASP.NET Core APIs", "High-performance web APIs with minimal APIs or controllers."],
      ["Framework migration", "Moving legacy .NET Framework apps to modern, cross-platform .NET."],
      ["Microsoft integrations", "Entra ID authentication, Azure services and Microsoft 365 APIs."],
    ],
  ),
  "backend-engineering/go": t(
    "Go is a compiled language from Google designed for simplicity and concurrency, producing single static binaries well suited to cloud services.",
    "We use Go for high-throughput services such as payment processing, gateways and workers, where low latency and small memory use matter.",
    [
      ["High-throughput APIs", "Services that handle heavy load with goroutines and modest hardware."],
      ["Payment and transaction services", "Reliable, idempotent processing with clear failure handling."],
      ["Cloud-native tooling", "Small container images and fast startup for Kubernetes workloads."],
    ],
  ),
  "backend-engineering/rails": t(
    "Ruby on Rails is a full-stack web framework that favours convention over configuration, with Active Record, built-in testing and Hotwire for interactive pages.",
    "We use Rails to take products from idea to launch quickly and to maintain and upgrade established Rails applications.",
    [
      ["Fast MVP delivery", "Full-featured products shipped quickly using Rails conventions."],
      ["Rails upgrades", "Moving older apps to current Rails and Ruby versions safely."],
      ["Hotwire interfaces", "Interactive pages with Turbo and Stimulus and little custom JavaScript."],
    ],
  ),
  "backend-engineering/php": t(
    "PHP is a server-side language that powers a large share of the web; modern PHP 8 adds a JIT compiler, typed properties, enums and attributes.",
    "We write modern, typed PHP and rescue older PHP codebases with tests, refactoring and upgrades to supported versions.",
    [
      ["Modern PHP services", "Typed, PSR-compliant code managed with Composer."],
      ["Legacy modernisation", "Upgrading PHP 5 and 7 applications and adding automated tests."],
      ["CMS and e-commerce backends", "Custom extensions for WordPress, Magento and similar platforms."],
    ],
  ),
  "backend-engineering/laravel": t(
    "Laravel is a PHP framework with an expressive syntax, Eloquent ORM, queues, scheduling and first-party tools for authentication and admin panels.",
    "We use Laravel for business applications, portals and APIs that need to launch fast and stay easy for in-house teams to maintain.",
    [
      ["Business web applications", "Portals and internal tools with authentication, roles and reports."],
      ["Queues and scheduling", "Background jobs for emails, SMS and payment callbacks."],
      ["API backends", "Laravel APIs serving web and mobile apps with Sanctum authentication."],
    ],
  ),
  "backend-engineering/rust": t(
    "Rust is a systems language that guarantees memory safety without a garbage collector, delivering C-like performance with strong compile-time checks.",
    "We use Rust for performance-critical components such as parsers, data processing and high-load network services, often alongside services in other languages.",
    [
      ["Performance-critical services", "Async network services with Tokio and Axum."],
      ["Data processing", "Fast, memory-safe parsing and transformation of large files and streams."],
      ["Native extensions", "Rust modules that speed up hot paths in Python or Node.js systems."],
    ],
  ),
  "backend-engineering/express": t(
    "Express.js is a minimal, unopinionated web framework for Node.js built around middleware, and one of the most widely used Node libraries.",
    "We use Express for lightweight APIs and services, and maintain existing Express codebases with stronger typing, validation and tests.",
    [
      ["Lightweight APIs", "Small, focused services with only the middleware they need."],
      ["Middleware design", "Authentication, logging and validation as reusable middleware."],
      ["Codebase hardening", "Adding TypeScript, input validation and tests to existing Express apps."],
    ],
  ),

  /* -------------------------------------------------------------- Database */
  "database-engineering/postgresql": t(
    "PostgreSQL is an advanced open-source relational database known for reliability, standards compliance, JSONB support and extensions such as PostGIS and pgvector.",
    "PostgreSQL is our default database for new products: we design schemas, tune queries and run replication and backups for systems that cannot lose data.",
    [
      ["Schema and query design", "Normalised schemas, indexes and query plans tuned for real workloads."],
      ["Vector and geo search", "pgvector for AI retrieval and PostGIS for location features in the same database."],
      ["High availability", "Streaming replication, point-in-time recovery and tested restores."],
    ],
  ),
  "database-engineering/mysql": t(
    "MySQL is one of the world's most widely deployed open-source relational databases, using the InnoDB engine for transactions and built-in replication.",
    "We design, tune and operate MySQL databases, and support the many existing applications built on it.",
    [
      ["Performance tuning", "Slow-query analysis, indexing and configuration tuning."],
      ["Replication and scaling", "Read replicas and failover for growing traffic."],
      ["Version upgrades", "Safe upgrades to MySQL 8 with compatibility testing."],
    ],
  ),
  "database-engineering/mariadb": t(
    "MariaDB is a community-developed fork of MySQL created by its original developers, largely drop-in compatible and offering Galera Cluster for synchronous replication.",
    "We run MariaDB for teams that want an open-source MySQL-compatible database, including clustered setups for high availability.",
    [
      ["MySQL-compatible migrations", "Moving MySQL workloads to MariaDB with minimal application changes."],
      ["Galera clustering", "Multi-node clusters that keep running when a node fails."],
      ["Backup and recovery", "Automated backups with Mariabackup and regular restore tests."],
    ],
  ),
  "database-engineering/sqlite": t(
    "SQLite is a small, fast, self-contained SQL database engine stored in a single file, embedded in billions of devices and nearly every mobile app.",
    "We use SQLite as the on-device database for offline-first mobile and desktop apps, and for lightweight services at the edge.",
    [
      ["Offline-first apps", "Local storage that lets apps work without a connection and sync later."],
      ["Embedded analytics", "Fast local queries inside desktop and IoT applications."],
      ["Edge deployments", "Single-file databases for small services and prototypes."],
    ],
  ),
  "database-engineering/mongodb": t(
    "MongoDB is a document database that stores flexible JSON-like documents, with a powerful aggregation pipeline and the managed MongoDB Atlas service.",
    "We use MongoDB when data is naturally document-shaped or changes often, designing schemas and indexes around real access patterns.",
    [
      ["Document data modelling", "Schemas designed around how the application reads and writes."],
      ["Aggregation pipelines", "Reporting and analytics computed inside the database."],
      ["Scaling with Atlas", "Replica sets, sharding and managed backups."],
    ],
  ),
  "database-engineering/redis": t(
    "Redis is an in-memory data store used for caching, sessions, queues, rate limiting and pub/sub messaging, with sub-millisecond response times.",
    "We use Redis, or compatible alternatives such as Valkey, to take load off primary databases and power fast, real-time features.",
    [
      ["Caching layers", "Cache strategies that cut database load and response times."],
      ["Queues and rate limiting", "Job queues, locks and API rate limits."],
      ["Real-time features", "Pub/sub and streams for notifications and live updates."],
    ],
  ),
  "database-engineering/elasticsearch": t(
    "Elasticsearch is a distributed search and analytics engine built on Apache Lucene, used for full-text search, log analytics and aggregations.",
    "We use Elasticsearch for fast, relevant search in products and for log and event analytics.",
    [
      ["Product and content search", "Relevance tuning, filters, facets and autocomplete."],
      ["Multilingual search", "Analysers configured for English and Ethiopic-script content."],
      ["Log analytics", "Centralised logs with dashboards and alerting."],
    ],
  ),
  "database-engineering/dynamodb": t(
    "Amazon DynamoDB is a fully managed, serverless key-value and document database from AWS that delivers consistent single-digit millisecond latency at any scale.",
    "We use DynamoDB for serverless and high-scale AWS workloads, designing single-table models around known access patterns.",
    [
      ["Access-pattern modelling", "Single-table designs with keys and indexes planned up front."],
      ["Serverless backends", "DynamoDB with Lambda and API Gateway for pay-per-use systems."],
      ["Event-driven processing", "DynamoDB Streams triggering downstream workflows."],
    ],
  ),
  "database-engineering/oracle": t(
    "Oracle Database is an enterprise relational database widely used in banking, telecom and government, with PL/SQL and Real Application Clusters for availability.",
    "We integrate with and optimise Oracle databases in enterprise environments, and plan migrations to open-source databases where that makes sense.",
    [
      ["Enterprise integration", "Safe, well-tested access to existing Oracle systems from new services."],
      ["PL/SQL and performance", "Tuning queries and stored procedures in established schemas."],
      ["Migration planning", "Assessing and executing moves to PostgreSQL where it reduces cost."],
    ],
  ),
  "database-engineering/cassandra": t(
    "Apache Cassandra is a distributed wide-column database with a masterless architecture, built for very high write throughput and multi-datacenter replication.",
    "We use Cassandra for write-heavy, always-on workloads such as event logs, messaging and telemetry.",
    [
      ["Write-heavy workloads", "Data models built for high-volume event and time-ordered data."],
      ["Multi-region replication", "Clusters that keep serving when a datacenter goes down."],
      ["Data modelling by query", "Tables designed per query pattern, as Cassandra requires."],
    ],
  ),
  "database-engineering/influxdb": t(
    "InfluxDB is a time-series database designed for metrics, sensor and event data, with retention policies and fast time-based queries.",
    "We use InfluxDB to store and analyse time-series data from IoT devices, infrastructure and application metrics.",
    [
      ["IoT telemetry", "Ingesting and querying sensor data from devices in the field."],
      ["Metrics storage", "Application and infrastructure metrics with sensible retention."],
      ["Time-series dashboards", "Grafana dashboards and alerts on top of InfluxDB."],
    ],
  ),
  "database-engineering/couchdb": t(
    "Apache CouchDB is a document database with an HTTP/JSON API and robust multi-master replication, pairing with PouchDB for offline sync in browsers and apps.",
    "We use CouchDB and PouchDB for offline-first field apps that must collect data without a connection and sync reliably later.",
    [
      ["Offline-first sync", "Field data captured offline and replicated when a connection returns."],
      ["Multi-site replication", "Branches and devices that sync with each other and a central server."],
      ["Conflict handling", "Clear rules for resolving edits made on several devices."],
    ],
  ),

  /* ----------------------------------------------------------------- Cloud */
  "cloud-services/aws": t(
    "Amazon Web Services is the largest public cloud, offering compute, storage, databases, networking, serverless and AI services across regions worldwide.",
    "We design, build and run AWS infrastructure with infrastructure as code, least-privilege security and cost monitoring from day one.",
    [
      ["Cloud architecture", "Well-architected setups on EC2, ECS, Lambda, RDS and S3."],
      ["Serverless applications", "Event-driven systems with Lambda, API Gateway and SQS."],
      ["Cost optimisation", "Right-sizing, savings plans and budgets that keep bills predictable."],
    ],
  ),
  "cloud-services/azure": t(
    "Microsoft Azure is a global cloud platform with strong enterprise and Microsoft 365 integration, offering App Service, AKS, Azure SQL and Azure OpenAI.",
    "We build on Azure for organisations already invested in Microsoft tools, connecting cloud workloads to Entra ID and existing systems.",
    [
      ["App hosting", "Web apps and APIs on App Service, Container Apps and AKS."],
      ["Identity integration", "Single sign-on and access control with Microsoft Entra ID."],
      ["Azure AI services", "Azure OpenAI and AI services within enterprise compliance boundaries."],
    ],
  ),
  "cloud-services/google-cloud": t(
    "Google Cloud offers compute, Kubernetes, data and AI services, including Cloud Run, GKE, BigQuery and Vertex AI, on Google's global network.",
    "We use Google Cloud for containerised apps on Cloud Run and GKE and for data platforms built on BigQuery.",
    [
      ["Serverless containers", "Cloud Run services that scale to zero when idle."],
      ["Data warehousing", "BigQuery analytics with scheduled pipelines and dashboards."],
      ["ML on Vertex AI", "Training and serving models on managed infrastructure."],
    ],
  ),
  "cloud-services/digitalocean": t(
    "DigitalOcean is a developer-friendly cloud with simple pricing, offering Droplets, managed databases, Kubernetes and App Platform.",
    "We use DigitalOcean for startups and small teams that want reliable infrastructure without enterprise-cloud complexity or cost.",
    [
      ["Simple, predictable hosting", "Droplets and App Platform with clear monthly costs."],
      ["Managed databases", "PostgreSQL, MySQL and Redis without self-managing servers."],
      ["Managed Kubernetes", "DOKS clusters for teams growing into containers."],
    ],
  ),
  "cloud-services/vercel": t(
    "Vercel is a frontend cloud platform from the creators of Next.js, with Git-based deployments, preview URLs, a global edge network and serverless functions.",
    "We deploy Next.js and other frontend apps on Vercel so every pull request gets a preview link and production releases take seconds.",
    [
      ["Preview deployments", "A live URL for every branch so stakeholders review real changes."],
      ["Edge delivery", "Static assets and rendering served close to users worldwide."],
      ["Serverless functions", "API routes and background tasks without managing servers."],
    ],
  ),
  "cloud-services/netlify": t(
    "Netlify is a platform for building and deploying websites and web apps, with Git-based continuous deployment, serverless functions and edge functions.",
    "We use Netlify for static sites, documentation and Jamstack frontends that need simple, reliable deployments.",
    [
      ["Continuous deployment", "Automatic builds and deploys on every push."],
      ["Jamstack sites", "Static-generated sites connected to headless CMSs."],
      ["Serverless functions", "Form handling, webhooks and light APIs alongside the site."],
    ],
  ),
  "cloud-services/firebase-cloud": t(
    "Firebase is Google's backend-as-a-service, providing Hosting, Cloud Functions, Firestore, Authentication and Storage for web and mobile apps.",
    "We use Firebase to launch products quickly with managed auth, data and hosting, and plan the path to custom backends when products outgrow it.",
    [
      ["Rapid MVP backends", "Authentication, Firestore and Storage without running servers."],
      ["Cloud Functions", "Server-side logic triggered by HTTP requests, data changes or schedules."],
      ["Security rules", "Tested Firestore and Storage rules that protect user data."],
    ],
  ),
  "cloud-services/cloudflare": t(
    "Cloudflare provides a global network for CDN, DNS, DDoS protection and web application firewall, plus developer services such as Workers, R2 and Pages.",
    "We put Cloudflare in front of applications for speed and security, and use Workers and R2 for lightweight edge computing and storage.",
    [
      ["Performance and caching", "CDN rules that cut load times for users far from the origin."],
      ["Security", "DDoS protection, WAF rules and bot management."],
      ["Edge computing", "Workers for redirects, auth checks and APIs at the edge."],
    ],
  ),
  "cloud-services/heroku": t(
    "Heroku is a platform-as-a-service owned by Salesforce that runs apps in managed containers called dynos, with add-ons such as Heroku Postgres.",
    "We deploy and maintain apps on Heroku and help teams migrate to other platforms when cost or control becomes a concern.",
    [
      ["Managed app hosting", "Git-based deployments with buildpacks and review apps."],
      ["Add-on integration", "Postgres, Redis, logging and monitoring add-ons configured properly."],
      ["Platform migration", "Moving Heroku apps to containers on AWS, Google Cloud or DigitalOcean."],
    ],
  ),
  "cloud-services/linode": t(
    "Linode, now part of Akamai as Akamai Cloud, offers virtual machines, managed Kubernetes, object storage and block storage at straightforward prices.",
    "We use Linode for cost-effective virtual machines and Kubernetes clusters, with the same infrastructure-as-code discipline we apply everywhere.",
    [
      ["Virtual machine hosting", "Compute instances provisioned and configured with Terraform and Ansible."],
      ["Managed Kubernetes", "LKE clusters for containerised workloads."],
      ["Object storage", "S3-compatible storage for media and backups."],
    ],
  ),
  "cloud-services/ibm-cloud": t(
    "IBM Cloud offers public and hybrid cloud services including Red Hat OpenShift, Db2, and watsonx AI, with a focus on regulated industries.",
    "We work with IBM Cloud in enterprise and regulated environments, especially for OpenShift-based hybrid deployments.",
    [
      ["Red Hat OpenShift", "Containerised apps on managed OpenShift clusters."],
      ["Hybrid cloud integration", "Connecting on-premise systems with cloud workloads securely."],
      ["Enterprise data services", "Db2 and managed databases for regulated workloads."],
    ],
  ),
  "cloud-services/openstack": t(
    "OpenStack is open-source cloud software for building private and public infrastructure-as-a-service clouds, with services for compute, networking and storage.",
    "We help organisations that need data to stay on-premise or in-country, such as banks and public institutions, run workloads on OpenStack private clouds.",
    [
      ["Private cloud workloads", "Deploying applications onto OpenStack compute, networking and storage."],
      ["Data residency", "Keeping sensitive data inside your own datacenter or country."],
      ["Automation", "Terraform and Ansible provisioning on OpenStack APIs."],
    ],
  ),

  /* ---------------------------------------------------------------- DevOps */
  "devops-engineering/docker": t(
    "Docker packages applications and their dependencies into containers that run the same way on a laptop, in CI and in production.",
    "We containerise every service we build, with small, secure images and Compose setups that get new developers running in minutes.",
    [
      ["Production-ready images", "Multi-stage builds, minimal base images and vulnerability scanning."],
      ["Local development", "Docker Compose environments that mirror production."],
      ["Legacy containerisation", "Moving existing apps into containers without rewrites."],
    ],
  ),
  "devops-engineering/kubernetes": t(
    "Kubernetes is the open-source standard for orchestrating containers, handling deployment, scaling, self-healing and service discovery across clusters.",
    "We design and run Kubernetes platforms when workloads justify them, with Helm, GitOps and autoscaling, and we say so when a simpler platform is enough.",
    [
      ["Cluster setup and operations", "Managed or self-hosted clusters with sensible defaults and upgrades."],
      ["GitOps deployments", "Helm charts and Argo CD for auditable, repeatable releases."],
      ["Autoscaling and resilience", "Workloads that scale with demand and recover from failures."],
    ],
  ),
  "devops-engineering/terraform": t(
    "Terraform, from HashiCorp, defines cloud and on-premise infrastructure as declarative code across hundreds of providers, with state and plans for safe changes.",
    "We manage infrastructure with Terraform, or its open-source fork OpenTofu, so every environment is reviewed, versioned and reproducible.",
    [
      ["Infrastructure as code", "Reusable modules for networks, clusters, databases and DNS."],
      ["Reviewed changes", "Plans run in CI and reviewed in pull requests before apply."],
      ["Multi-environment setups", "Identical staging and production from the same code."],
    ],
  ),
  "devops-engineering/ansible": t(
    "Ansible is Red Hat's agentless automation tool that configures servers and deploys applications over SSH using readable YAML playbooks.",
    "We use Ansible to configure servers consistently, especially on virtual machines and on-premise infrastructure that is not containerised.",
    [
      ["Server configuration", "Hardened, consistent servers defined in playbooks and roles."],
      ["Application deployment", "Repeatable rollouts to fleets of virtual machines."],
      ["On-premise automation", "Automating datacenter tasks that used to be done by hand."],
    ],
  ),
  "devops-engineering/jenkins": t(
    "Jenkins is an open-source automation server with a large plugin ecosystem, using Jenkinsfiles to define build and deployment pipelines as code.",
    "We build and maintain Jenkins pipelines for self-hosted environments and modernise older Jenkins setups.",
    [
      ["Pipelines as code", "Declarative Jenkinsfiles kept with the application code."],
      ["Self-hosted CI", "Builds that run inside your own network for compliance."],
      ["Jenkins modernisation", "Cleaning up plugins, agents and freestyle jobs."],
    ],
  ),
  "devops-engineering/github-actions": t(
    "GitHub Actions is CI/CD built into GitHub, with YAML workflows triggered by repository events and a large marketplace of reusable actions.",
    "We use GitHub Actions for most CI/CD: tests, builds, security scans and deployments, using short-lived OIDC credentials instead of stored cloud keys.",
    [
      ["CI pipelines", "Linting, tests and builds on every pull request."],
      ["Automated deployments", "Environment-gated releases to cloud platforms."],
      ["Secure credentials", "OIDC federation to AWS, Azure and Google Cloud."],
    ],
  ),
  "devops-engineering/prometheus": t(
    "Prometheus is a CNCF open-source monitoring system that collects time-series metrics, queries them with PromQL and triggers alerts through Alertmanager.",
    "We instrument services with Prometheus metrics and alerts so problems are detected by monitoring, not by customers.",
    [
      ["Service instrumentation", "Request rates, errors and latency exposed by every service."],
      ["Alerting", "Actionable alerts routed to the right people via Alertmanager."],
      ["Kubernetes monitoring", "Cluster, node and workload metrics out of the box."],
    ],
  ),
  "devops-engineering/grafana": t(
    "Grafana is an open-source platform for dashboards and visualisation across metrics, logs and traces, with Loki and Tempo in the same stack.",
    "We build Grafana dashboards that give engineers and business owners a shared, real-time view of system health.",
    [
      ["Operational dashboards", "Clear views of latency, errors, traffic and saturation."],
      ["Logs and traces", "Loki and Tempo connected for fast root-cause analysis."],
      ["Business metrics", "Signups, payments and orders tracked alongside system data."],
    ],
  ),
  "devops-engineering/gitlab-ci": t(
    "GitLab CI/CD is built into GitLab, defining pipelines in a .gitlab-ci.yml file and running jobs on shared or self-hosted runners.",
    "We build GitLab pipelines for teams on GitLab.com or self-managed GitLab, including fully on-premise setups.",
    [
      ["Pipeline design", "Stages, caching and parallel jobs for fast feedback."],
      ["Self-hosted runners", "Runners inside your network for private infrastructure."],
      ["Integrated security scanning", "Dependency and container scanning in every pipeline."],
    ],
  ),
  "devops-engineering/azure-devops": t(
    "Azure DevOps is Microsoft's suite for software delivery, with Boards, Repos, Pipelines, Artifacts and Test Plans.",
    "We set up and run Azure Pipelines and related services for teams that work in the Microsoft ecosystem.",
    [
      ["Azure Pipelines", "YAML pipelines building and deploying .NET, Node.js and container apps."],
      ["Work tracking", "Boards configured to match how your team actually works."],
      ["Artifact management", "Private package feeds for shared libraries."],
    ],
  ),
  "devops-engineering/new-relic": t(
    "New Relic is an observability platform covering application performance monitoring, infrastructure, logs, browser and mobile monitoring.",
    "We instrument applications with New Relic to find slow transactions, errors and bottlenecks across the stack.",
    [
      ["Application performance monitoring", "Transaction traces that show where time is spent."],
      ["Error tracking", "Grouped errors with context to fix issues quickly."],
      ["User experience monitoring", "Browser and mobile metrics from real users."],
    ],
  ),
  "devops-engineering/datadog": t(
    "Datadog is a SaaS monitoring and security platform that unifies infrastructure metrics, APM, logs, synthetic tests and alerting.",
    "We configure Datadog so teams get correlated metrics, traces and logs, with dashboards and alerts that stay useful rather than noisy.",
    [
      ["Unified observability", "Metrics, traces and logs linked in one place."],
      ["Synthetic monitoring", "Scheduled checks of key user journeys and APIs."],
      ["Alert tuning", "Monitors with thresholds that reduce noise and catch real issues."],
    ],
  ),

  /* ------------------------------------------------- Frameworks & Platforms */
  "frameworks-platforms/shopify": t(
    "Shopify is a hosted e-commerce platform with themes built in Liquid, a large app ecosystem, checkout extensibility and Hydrogen for headless storefronts.",
    "We build and customise Shopify stores, from theme development and custom apps to headless storefronts and integrations with local payment and delivery providers.",
    [
      ["Custom themes", "Fast, on-brand Liquid themes built with Online Store 2.0 sections."],
      ["Custom apps and integrations", "Apps connecting Shopify to ERPs, inventory and fulfilment systems."],
      ["Headless storefronts", "Hydrogen or Next.js frontends powered by the Storefront API."],
    ],
  ),
  "frameworks-platforms/wordpress": t(
    "WordPress is the open-source content management system behind a large share of the web, extensible with themes, plugins and the block editor.",
    "We build custom WordPress themes and plugins, secure and speed up existing sites, and use WordPress headlessly when a modern frontend is needed.",
    [
      ["Custom themes and blocks", "Block-editor themes that editors can manage without breaking layouts."],
      ["Plugin development", "Custom plugins instead of piles of third-party ones."],
      ["Security and performance", "Hardening, updates, caching and Core Web Vitals improvements."],
    ],
  ),
  "frameworks-platforms/webflow": t(
    "Webflow is a visual web design platform with a built-in CMS and hosting, producing clean, responsive sites without hand-written code.",
    "We build Webflow sites that marketing teams can run themselves, and extend them with custom code and integrations where needed.",
    [
      ["Marketing websites", "Responsive Webflow builds from your designs."],
      ["CMS structures", "Collections that let teams publish content without developer help."],
      ["Custom integrations", "Forms, CRMs and analytics connected through APIs and embeds."],
    ],
  ),
  "frameworks-platforms/magento": t(
    "Magento, available as Magento Open Source and Adobe Commerce, is a PHP e-commerce platform for complex catalogues, multiple stores and B2B selling.",
    "We maintain, extend and upgrade Magento stores, and help merchants decide when to re-platform.",
    [
      ["Custom extensions", "Modules for pricing, shipping and catalogue rules."],
      ["Upgrades and patches", "Keeping Magento 2 stores secure and current."],
      ["Performance tuning", "Caching, indexing and query work for large catalogues."],
    ],
  ),
  "frameworks-platforms/strapi": t(
    "Strapi is an open-source headless CMS built on Node.js that generates REST and GraphQL APIs from content types, self-hosted or on Strapi Cloud.",
    "We use Strapi to give teams an editable, self-hostable content backend for websites and apps, customised with plugins and roles.",
    [
      ["Headless content APIs", "Content types modelled for web and mobile frontends."],
      ["Custom plugins", "Workflows, roles and integrations tailored to editorial teams."],
      ["Self-hosted deployments", "Strapi running on your own infrastructure with backups."],
    ],
  ),
  "frameworks-platforms/sanity": t(
    "Sanity is a headless content platform with a real-time content store, the GROQ query language and a fully customisable React-based editing studio.",
    "We use Sanity for content-rich sites where editors need structured content, live previews and a studio shaped around their work.",
    [
      ["Structured content models", "Reusable content designed once and published anywhere."],
      ["Custom Sanity Studio", "Editing interfaces tailored to how your team works."],
      ["Live previews", "Editors see changes on the real site before publishing."],
    ],
  ),
  "frameworks-platforms/ghost": t(
    "Ghost is an open-source publishing platform built on Node.js, with built-in newsletters, memberships and paid subscriptions.",
    "We set up and customise Ghost for publishers and organisations that want a fast blog or newsletter with memberships.",
    [
      ["Custom themes", "Handlebars themes matched to your brand."],
      ["Memberships and newsletters", "Free and paid tiers configured and integrated."],
      ["Self-hosting", "Ghost deployed and maintained on your infrastructure."],
    ],
  ),
  "frameworks-platforms/odoo": t(
    "Odoo is an open-source suite of business applications covering accounting, inventory, sales, purchasing, HR and more, extensible through Python modules.",
    "We implement and customise Odoo for growing businesses, configuring local currency, taxes and reports and building custom modules where standard apps fall short.",
    [
      ["ERP implementation", "Accounting, inventory, sales and purchasing configured around your processes."],
      ["Custom modules", "Python modules for workflows the standard apps do not cover."],
      ["Integrations", "Connecting Odoo to e-commerce, payment and logistics systems."],
    ],
  ),
  "frameworks-platforms/sap": t(
    "SAP is a leading enterprise resource planning vendor; SAP S/4HANA and the SAP Business Technology Platform run finance, supply chain and operations for large organisations.",
    "We build integrations and extensions around SAP systems, connecting them to modern web, mobile and data applications through supported APIs.",
    [
      ["SAP integrations", "Connecting SAP to other systems through OData and REST APIs."],
      ["Side-by-side extensions", "Custom apps on SAP BTP that keep the core clean."],
      ["Data extraction", "Feeding SAP data into reporting and analytics platforms."],
    ],
  ),
  "frameworks-platforms/salesforce": t(
    "Salesforce is a leading CRM platform, with Sales Cloud and Service Cloud, customisable through Apex, Flow and Lightning Web Components.",
    "We customise and integrate Salesforce so sales and service teams work from accurate data connected to the rest of the business.",
    [
      ["CRM customisation", "Objects, flows and page layouts that match your sales process."],
      ["Lightning Web Components", "Custom UI built on Salesforce's component model."],
      ["System integrations", "Syncing Salesforce with ERPs, billing and support tools."],
    ],
  ),
  "frameworks-platforms/wix": t(
    "Wix is a hosted website builder with drag-and-drop design, built-in hosting and developer tools (Velo) for adding custom code and data.",
    "We build and extend Wix sites for small businesses that want to manage their own site, adding custom functionality where needed.",
    [
      ["Business websites", "Professional Wix sites built from your brand and content."],
      ["Custom functionality", "Custom code and data collections for features beyond templates."],
      ["Integrations", "Booking, forms and third-party services connected to the site."],
    ],
  ),
  "frameworks-platforms/squarespace": t(
    "Squarespace is a hosted website builder known for polished templates, with built-in hosting, e-commerce and scheduling for small businesses and creators.",
    "We set up and refine Squarespace sites for organisations that want a polished site they can manage without developers.",
    [
      ["Site setup and design", "Templates customised to match your brand."],
      ["Custom code injection", "Tracking, styling and embeds added where templates fall short."],
      ["Migrations", "Moving content to or from Squarespace cleanly."],
    ],
  ),

  /* ------------------------------------------------ Automation & Integration */
  "automation/zapier": t(
    "Zapier is a no-code automation platform that connects thousands of web apps through triggers and actions in workflows called Zaps.",
    "We design and maintain Zapier workflows that remove manual data entry between everyday business tools, with error handling and documentation.",
    [
      ["No-code workflows", "Multi-step Zaps connecting forms, CRMs, email and spreadsheets."],
      ["Error handling", "Paths, filters and alerts so failures are caught, not missed."],
      ["Workflow documentation", "Clear records of what each automation does and who owns it."],
    ],
  ),
  "automation/make-com": t(
    "Make (formerly Integromat) is a visual automation platform for building multi-step scenarios with routers, iterators and data transformation.",
    "We build Make scenarios for workflows that need branching, data transformation or higher volume than simple automations allow.",
    [
      ["Visual scenarios", "Complex multi-step workflows built and maintained visually."],
      ["Data transformation", "Mapping, filtering and reshaping data between apps."],
      ["Custom API connections", "HTTP modules for apps without ready-made connectors."],
    ],
  ),
  "automation/n8n": t(
    "n8n is a source-available workflow automation tool that can be self-hosted, combining visual nodes with JavaScript or Python code and AI agent nodes.",
    "We use n8n when data must stay on your own servers or workflows need custom code, including AI-assisted automations.",
    [
      ["Self-hosted automation", "n8n running on your infrastructure for data control."],
      ["Code-enabled workflows", "Custom logic in code nodes where visual steps are not enough."],
      ["AI workflows", "LLM-powered steps for classification, summarisation and routing."],
    ],
  ),
  "automation/mulesoft": t(
    "MuleSoft's Anypoint Platform, part of Salesforce, provides API-led integration, API management and the DataWeave transformation language for enterprises.",
    "We build MuleSoft integrations and APIs for enterprises connecting core systems, following API-led connectivity patterns.",
    [
      ["API-led connectivity", "System, process and experience APIs with clear ownership."],
      ["DataWeave transformations", "Reliable mapping between enterprise data formats."],
      ["API management", "Policies, security and monitoring across your APIs."],
    ],
  ),
  "automation/boomi": t(
    "Boomi is a cloud integration platform (iPaaS) with low-code integration, API management and master data management.",
    "We build and maintain Boomi processes connecting SaaS and on-premise systems, with monitoring and clear error handling.",
    [
      ["Integration processes", "Low-code processes linking ERP, CRM and HR systems."],
      ["Hybrid connectivity", "Boomi runtimes that reach on-premise systems securely."],
      ["Master data", "Consistent customer and product records across systems."],
    ],
  ),
  "automation/nifi": t(
    "Apache NiFi is an open-source dataflow tool for routing, transforming and moving data between systems, with a visual interface and full data provenance.",
    "We use NiFi to build auditable data pipelines that ingest from many sources, especially where on-premise deployment and traceability matter.",
    [
      ["Data ingestion", "Flows that collect data from files, databases, APIs and queues."],
      ["Data provenance", "A full record of where each piece of data came from and went."],
      ["On-premise pipelines", "Self-hosted flows for sensitive or regulated data."],
    ],
  ),
  "automation/workato": t(
    "Workato is an enterprise automation and integration platform that uses recipes and a large connector library to automate workflows across business apps.",
    "We build Workato recipes that automate cross-department processes with the governance enterprises need.",
    [
      ["Enterprise recipes", "Automations spanning finance, HR, sales and IT."],
      ["Connector development", "Custom connectors for systems without one."],
      ["Governance", "Environments, versioning and access control for automations."],
    ],
  ),
  "automation/celigo": t(
    "Celigo is an iPaaS (integrator.io) with prebuilt integrations for ERPs such as NetSuite and for e-commerce platforms, plus a flow builder for custom integrations.",
    "We configure and extend Celigo integrations, especially between e-commerce, ERP and fulfilment systems.",
    [
      ["Prebuilt integration setup", "Integration apps configured for your business rules."],
      ["Custom flows", "Flows for systems and edge cases prebuilt apps do not cover."],
      ["Order-to-cash automation", "Orders, inventory and invoices synced across systems."],
    ],
  ),
  "automation/ifttt": t(
    "IFTTT (If This Then That) connects consumer apps and smart devices through simple automations called applets.",
    "We use IFTTT for lightweight automations and connect products to it so their users can automate with them.",
    [
      ["Simple applets", "Quick automations between everyday apps and devices."],
      ["Smart device automation", "Connecting IoT devices and home automation."],
      ["IFTTT service integration", "Publishing your product as an IFTTT service."],
    ],
  ),
  "automation/power-automate": t(
    "Microsoft Power Automate builds cloud flows and desktop flows (RPA) with connectors to Microsoft 365, Dataverse and hundreds of other services.",
    "We build Power Automate flows for organisations on Microsoft 365, automating approvals, documents and data entry.",
    [
      ["Approval workflows", "Multi-stage approvals in Teams, Outlook and SharePoint."],
      ["Desktop automation (RPA)", "Desktop flows that automate legacy applications without APIs."],
      ["Microsoft 365 integration", "Flows across SharePoint, Excel, Teams and Dataverse."],
    ],
  ),
  "automation/pipedream": t(
    "Pipedream is an integration platform for developers that combines prebuilt triggers and actions with code steps in Node.js or Python, run serverlessly.",
    "We use Pipedream for developer-friendly integrations and webhooks that need real code without running servers.",
    [
      ["Webhook processing", "Receiving, validating and routing webhooks from any service."],
      ["Code-first workflows", "Node.js and Python steps with access to npm and PyPI packages."],
      ["Event-driven integrations", "Workflows triggered by schedules, events and API calls."],
    ],
  ),
  "automation/tray-io": t(
    "Tray.io (now Tray.ai) is a low-code integration and automation platform for building complex, API-based workflows, with AI agent capabilities.",
    "We build Tray workflows for teams that need advanced logic and many API integrations without maintaining custom integration code.",
    [
      ["Complex API workflows", "Branching, looping workflows across many SaaS tools."],
      ["Custom connectors", "Connecting internal and niche systems through their APIs."],
      ["AI-assisted automation", "Workflows that use AI steps for classification and routing."],
    ],
  ),
};

export function getTechDetail(categoryId: string, slug: string): TechDetail | undefined {
  return techDetails[`${categoryId}/${slug}`];
}

/* ======================================================================== */
/* Category-level copy                                                      */
/* ======================================================================== */

/** Generic "choose us" icons, reused in order for each category's six items. */
const chooseIcons: TechIconKey[] = ["code", "layout", "shield", "smartphone", "globe", "settings"];
const choose = (titles: [string, string][]) => titles.map(([title, text], i) => ({ icon: chooseIcons[i], title, text }));

export const categoryDetails: Record<string, CategoryDetail> = {
  "ai-machine-learning": {
    heroHighlight: "Ship",
    heroRest: "AI Features That Are Grounded, Measured and Ready for Production",
    heroLead: "Assistants, prediction models and computer vision built on your data, evaluated before launch and monitored after, including language features for Amharic and Afaan Oromo.",
    specs: [
      { icon: "brain", text: "LLM apps with retrieval (RAG)" },
      { icon: "target", text: "Evaluation before every release" },
      { icon: "languages", text: "Amharic & Afaan Oromo NLP" },
      { icon: "lineChart", text: "Forecasting & classical ML" },
      { icon: "eye", text: "Computer vision & OCR" },
      { icon: "lock", text: "Privacy-aware data handling" },
    ],
    techCta: "Explore AI for Your Business",
    expertise: [
      { icon: "brain", title: "Generative AI & LLMs", text: "Assistants, document Q&A and extraction tools on hosted or open models, grounded with retrieval and protected by guardrails.", bullets: ["LLM API integration", "RAG pipelines", "Prompt and output evaluation", "Fine-tuning (LoRA)", "Guardrails & human review"] },
      { icon: "lineChart", title: "Predictive Analytics & Classical ML", text: "Classification, regression and forecasting models that predict demand, churn, credit risk and fraud from your historical data.", bullets: ["Scikit-learn pipelines", "Gradient boosting (XGBoost/LightGBM)", "Time-series forecasting", "Feature engineering", "Model explainability"] },
      { icon: "eye", title: "Computer Vision & NLP", text: "Image, document and text models for recognition, extraction and classification, including multilingual and Ethiopic-script text.", bullets: ["Object detection", "OCR & document parsing", "Text classification", "Named entity recognition", "Translation & transcription"] },
      { icon: "refresh", title: "MLOps & Model Deployment", text: "Pipelines that train, version, deploy and monitor models so they keep performing after launch.", bullets: ["Experiment tracking (MLflow)", "Model serving APIs", "A/B and shadow testing", "Drift monitoring", "Automated retraining"] },
    ],
    solutions: [
      { title: "AI assistants & knowledge bots", text: "Chat assistants that answer from your own documents and systems, with citations and handover to staff." },
      { title: "Document understanding", text: "Extract structured data from invoices, forms, IDs and contracts to cut manual data entry." },
      { title: "Forecasting & risk models", text: "Predict demand, cash flow, churn or default risk with models your team can interpret." },
      { title: "Computer vision systems", text: "Detection, counting and inspection from images and video, on cloud or edge devices." },
      { title: "Local-language AI", text: "Classification, search and assistants that handle Amharic, Afaan Oromo and English content." },
      { title: "Recommendation engines", text: "Personalised product, content and next-best-action recommendations." },
      { title: "Fraud & anomaly detection", text: "Flag unusual transactions and behaviour for review before losses grow." },
      { title: "AI readiness assessments", text: "A clear view of which AI use cases your data can support and what they will take." },
    ],
    challenges: [
      "Building LLM applications that answer accurately from your own data instead of guessing.",
      "Serving models with low latency and predictable cost as usage grows.",
      "Measuring model quality, fairness and drift with evaluation you can repeat.",
      "Working with limited or messy data, including low-resource languages.",
    ],
    chooseUs: choose([
      ["Evaluation-first delivery", "We define how a model will be judged before we build it."],
      ["Production experience", "Models ship as tested services, not notebooks."],
      ["Privacy-aware by design", "Sensitive data is minimised, masked or kept on your infrastructure."],
      ["Local-language capability", "Experience with Amharic and Afaan Oromo text and the challenges of low-resource languages."],
      ["Model-agnostic advice", "Hosted or open models, chosen for your cost, accuracy and data needs."],
      ["Continuous improvement", "Monitoring and feedback loops that keep models useful over time."],
    ]),
    stats: [
      { value: "12", label: "AI & ML tools in our stack" },
      { value: "3", label: "NLP languages (am, om, en)" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["amharic-support-assistant", "mobile-money-checkout", "logistics-control-tower"],
    spotlight: {
      slug: "amharic-support-assistant",
      challenge: "A support team answered the same customer questions in Amharic and English every day, searching scattered documents by hand.",
      solution: "A retrieval-augmented assistant over the company's own documents, with citations, confidence checks and human handover for uncertain answers.",
      result: "Customers get grounded answers in their own language, and agents spend their time on the cases that need a person.",
      metric: { value: "RAG", label: "Grounded, cited answers" },
    },
    faqs: [
      { q: "Can you add AI to our existing application?", a: "Yes. We integrate LLM and ML features into existing products through APIs, with retrieval for your own data, guardrails, and caching to control cost." },
      { q: "How do you make sure AI output is accurate?", a: "We build evaluation sets from your real data before development, test every change against them, and add human review for high-stakes decisions." },
      { q: "Do you support Amharic and Afaan Oromo?", a: "Yes. We evaluate models on Amharic and Afaan Oromo text, combine them with retrieval and fine-tuning where needed, and are clear about where accuracy is still limited." },
      { q: "Can our data stay private?", a: "Yes. We can use providers with no-training data terms, mask sensitive fields, or self-host open models on your own infrastructure." },
    ],
  },

  "mobile-development": {
    heroHighlight: "Build",
    heroRest: "Mobile Apps That Stay Fast on Real Devices and Real Networks",
    heroLead: "Native and cross-platform apps for Android and iOS, designed offline-first for patchy connections and tested on the budget phones your users actually carry.",
    specs: [
      { icon: "smartphone", text: "Native & cross-platform apps" },
      { icon: "wifiOff", text: "Offline-first data sync" },
      { icon: "gauge", text: "Optimised for low-end devices" },
      { icon: "wallet", text: "Mobile money & payments" },
      { icon: "bell", text: "Push notifications & engagement" },
      { icon: "rocket", text: "Automated store releases" },
    ],
    techCta: "Plan Your Mobile App",
    expertise: [
      { icon: "smartphone", title: "Native Development", text: "Kotlin and Swift apps that use each platform fully, with the best performance and access to every device API.", bullets: ["Kotlin & Jetpack Compose", "Swift & SwiftUI", "Platform UI guidelines", "Device hardware APIs", "Background processing"] },
      { icon: "layers", title: "Cross-Platform Apps", text: "Flutter and React Native apps that share one codebase across Android and iOS without feeling generic.", bullets: ["Flutter", "React Native & Expo", "Shared design systems", "Native modules", "Code sharing with web"] },
      { icon: "wifiOff", title: "Offline-First Architecture", text: "Apps that keep working without a connection and sync safely when one returns.", bullets: ["Local databases (SQLite)", "Background sync", "Conflict resolution", "Low-bandwidth APIs", "Small app sizes"] },
      { icon: "rocket", title: "Release & Quality Automation", text: "Automated builds, testing and releases so updates reach users quickly and safely.", bullets: ["Fastlane pipelines", "Device testing", "Crash reporting", "Staged rollouts", "Store compliance"] },
    ],
    solutions: [
      { title: "Consumer mobile apps", text: "Polished apps for customers, from onboarding to payments and notifications." },
      { title: "Field and agent apps", text: "Offline-capable tools for sales agents, inspectors and delivery staff." },
      { title: "Mobile banking & wallets", text: "Secure financial apps with biometrics, PINs and mobile money integration." },
      { title: "Cross-platform MVPs", text: "One codebase to test a product in both app stores quickly." },
      { title: "App modernisation", text: "Rescue, refactor and migrate older apps, including Xamarin to .NET MAUI." },
      { title: "Companion apps", text: "Mobile apps that pair with your web platform or connected devices." },
      { title: "Internal enterprise apps", text: "Secure apps for staff with single sign-on and device management." },
      { title: "App performance audits", text: "Find and fix slow startup, crashes, battery drain and large downloads." },
    ],
    challenges: [
      "Keeping apps usable on intermittent 3G and 4G connections.",
      "Delivering smooth performance on low-cost Android devices with limited memory.",
      "Integrating mobile money, cards and bank payments securely.",
      "Shipping frequent updates without breaking existing users.",
    ],
    chooseUs: choose([
      ["Offline-first thinking", "We design for unreliable networks from the first screen."],
      ["Real-device testing", "We test on the budget devices common in local markets."],
      ["Security-minded builds", "Secure storage, certificate pinning and safe authentication flows."],
      ["Native and cross-platform skill", "We recommend the approach that fits your product, not one we always use."],
      ["Local payment experience", "Familiarity with mobile money and local payment integrations."],
      ["Automated releases", "CI pipelines that make store releases routine."],
    ]),
    stats: [
      { value: "12", label: "Mobile tools in our stack" },
      { value: "2", label: "Platforms from one plan: Android & iOS" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["mobile-money-checkout", "agri-marketplace", "school-learning-portal"],
    spotlight: {
      slug: "agri-marketplace",
      challenge: "Farmer cooperatives and drivers needed to place and track orders in areas with weak mobile coverage.",
      solution: "A Flutter app with local storage and background sync, so orders and deliveries are captured offline and uploaded when a signal returns.",
      result: "Field users can keep working through dead zones, and buyers see order status as soon as devices reconnect.",
      metric: { value: "Offline", label: "First architecture" },
    },
    faqs: [
      { q: "Native or cross-platform: which should we choose?", a: "Cross-platform (Flutter or React Native) suits most products and saves time. We recommend native when you need deep device integration or maximum performance." },
      { q: "Can the app work without internet?", a: "Yes. We design offline-first: data is stored locally and synced in the background, with clear rules for resolving conflicts." },
      { q: "Do you handle App Store and Google Play submission?", a: "Yes. We prepare store listings, privacy details and builds, and automate releases so future updates are routine." },
      { q: "Can you take over an existing app?", a: "Yes. We start with a code and architecture review, stabilise the app, then improve it incrementally." },
    ],
  },

  "frontend-engineering": {
    heroHighlight: "Craft",
    heroRest: "Fast, Accessible Interfaces People Enjoy Using",
    heroLead: "React, Next.js, Angular and Vue frontends built for Core Web Vitals, WCAG accessibility and slow networks, with design systems your team can keep extending.",
    specs: [
      { icon: "layout", text: "Pixel-accurate responsive design" },
      { icon: "gauge", text: "Core Web Vitals optimised" },
      { icon: "accessibility", text: "Accessibility (WCAG 2.2 AA)" },
      { icon: "search", text: "SEO-first architecture" },
      { icon: "blocks", text: "Component-driven development" },
      { icon: "globe", text: "Cross-browser compatibility" },
    ],
    techCta: "Talk to an Arki Engineer",
    expertise: [
      { icon: "users", title: "Single-Page Applications", text: "Fast, app-like web products with React, Vue and Angular, with instant navigation and well-managed state.", bullets: ["React SPAs", "Vue.js SPAs", "Angular SPAs", "State management", "Client-side routing"] },
      { icon: "zap", title: "Server Rendering & Static Sites", text: "SEO-friendly, quick-loading pages with Next.js, Nuxt and SvelteKit, choosing the right rendering strategy per page.", bullets: ["Next.js SSR/SSG/ISR", "Nuxt", "SvelteKit", "Streaming & server components", "Edge caching"] },
      { icon: "blocks", title: "Design Systems & Component Libraries", text: "Reusable component libraries with documentation, tokens and visual regression tests.", bullets: ["Storybook", "Design tokens", "Tailwind configuration", "MUI theming", "Visual regression tests"] },
      { icon: "gauge", title: "Performance & Accessibility", text: "Audits and fixes that make existing frontends faster and usable by everyone.", bullets: ["Lighthouse audits", "Bundle size reduction", "Image optimisation", "Screen-reader testing", "Keyboard navigation"] },
    ],
    solutions: [
      { title: "Custom React & Next.js applications", text: "Feature-rich web applications built on the most widely used frontend stack." },
      { title: "Progressive Web Apps (PWAs)", text: "Installable web apps with offline support and push notifications." },
      { title: "Admin dashboards", text: "Data-heavy internal tools with clear UX, filters and tables." },
      { title: "E-commerce storefronts", text: "Fast storefronts focused on conversion, SEO and smooth checkout." },
      { title: "Data visualisation", text: "Interactive charts and live dashboards that make complex data readable." },
      { title: "Design system builds", text: "Shared component libraries that keep products consistent." },
      { title: "Frontend modernisation", text: "Incremental migration from jQuery or legacy frameworks to modern stacks." },
      { title: "Multilingual interfaces", text: "Localised UIs with the right fonts and layouts for Ethiopic script and English." },
    ],
    challenges: [
      "Hitting good Core Web Vitals on mid-range phones and slow connections.",
      "Managing complex, real-time state without slowing the interface.",
      "Making every interactive element accessible to keyboard and screen-reader users.",
      "Keeping bundle sizes small as products grow.",
    ],
    chooseUs: choose([
      ["Component-driven development", "Reusable, documented components from the start."],
      ["Core Web Vitals expertise", "Performance budgets checked in CI."],
      ["Design system architecture", "Tokens and components designers and developers share."],
      ["Accessibility-first engineering", "Semantic HTML and tested interaction patterns."],
      ["Cross-browser & device testing", "Verified on the browsers and phones your users have."],
      ["Performance monitoring", "Real-user metrics and alerts after launch."],
    ]),
    stats: [
      { value: "95+", label: "Lighthouse performance score we target" },
      { value: "<2.5s", label: "Largest Contentful Paint target" },
      { value: "AA", label: "WCAG level we build to" },
      { value: "12", label: "Frontend tools in our stack" },
    ],
    caseStudySlugs: ["clinic-records-platform", "school-learning-portal", "logistics-control-tower"],
    spotlight: {
      slug: "school-learning-portal",
      challenge: "Students and parents needed to use a learning portal on low-cost phones and slow, shared connections.",
      solution: "A lightweight Vue frontend with aggressive caching, compressed media and pages that work before all scripts load.",
      result: "Course content, assignments and grades stay usable on low-bandwidth connections.",
      metric: { value: "Lean", label: "Low-bandwidth design" },
    },
    faqs: [
      { q: "Which frontend framework do you recommend?", a: "It depends on the product. React with Next.js suits most projects; Angular fits large enterprise teams; Vue and Svelte are excellent for lighter, fast-moving products." },
      { q: "How do you ensure frontend performance?", a: "We set performance budgets, use code splitting, image optimisation and caching, and check Lighthouse and real-user metrics in CI and after launch." },
      { q: "Do you build Progressive Web Apps?", a: "Yes. We build PWAs with service workers, offline support and install prompts, which work well where app downloads are costly." },
      { q: "Can you modernise our legacy frontend?", a: "Yes. We migrate incrementally, replacing pages or components one at a time so the product keeps running throughout." },
    ],
  },

  "backend-engineering": {
    heroHighlight: "Engineer",
    heroRest: "Secure, Scalable Backends That Keep Your Product Running",
    heroLead: "APIs, services and integrations in Node.js, Python, Go, Java and .NET, designed for security, observability and growth from the first commit.",
    specs: [
      { icon: "server", text: "REST & GraphQL API design" },
      { icon: "lock", text: "Security & authentication" },
      { icon: "boxes", text: "Microservices & modular monoliths" },
      { icon: "wallet", text: "Payment & mobile money integrations" },
      { icon: "activity", text: "Observability built in" },
      { icon: "zap", text: "High-throughput services" },
    ],
    techCta: "Discuss Your Backend",
    expertise: [
      { icon: "server", title: "API Development", text: "Well-documented, versioned APIs that web, mobile and partner systems can rely on.", bullets: ["REST & OpenAPI", "GraphQL", "Authentication (OAuth 2.0)", "Rate limiting", "API versioning"] },
      { icon: "boxes", title: "Service Architecture", text: "Modular monoliths and microservices, chosen for your team size and scale, not fashion.", bullets: ["Domain-driven design", "Event-driven messaging", "Queues & workers", "Service boundaries", "Idempotent processing"] },
      { icon: "plug", title: "Integrations & Payments", text: "Reliable connections to payment providers, banks, ERPs and third-party services.", bullets: ["Mobile money & bank APIs", "Webhooks", "ERP & CRM connectors", "SMS & email gateways", "Retry & reconciliation"] },
      { icon: "shield", title: "Security & Reliability", text: "Backends that protect data and recover gracefully from failure.", bullets: ["OWASP practices", "Secrets management", "Audit logging", "Load testing", "Backups & recovery"] },
    ],
    solutions: [
      { title: "Custom API platforms", text: "APIs that power your web, mobile and partner integrations." },
      { title: "Payment processing services", text: "Checkout, wallets and reconciliation across mobile money, banks and cards." },
      { title: "SaaS backends", text: "Multi-tenant platforms with billing, roles and audit trails." },
      { title: "Legacy modernisation", text: "Refactor or migrate ageing systems without disrupting operations." },
      { title: "Real-time systems", text: "Chat, tracking and live updates over WebSockets and event streams." },
      { title: "System integrations", text: "Connect ERPs, CRMs, government and partner APIs reliably." },
      { title: "Background processing", text: "Queues and scheduled jobs for notifications, imports and reports." },
      { title: "Backend audits", text: "Reviews of security, performance and architecture with a clear action plan." },
    ],
    challenges: [
      "Processing payments reliably when external providers time out or retry.",
      "Scaling APIs for traffic spikes without over-provisioning.",
      "Integrating with legacy systems that have limited or no APIs.",
      "Keeping sensitive data secure and auditable.",
    ],
    chooseUs: choose([
      ["Clean API design", "Consistent, documented contracts that frontends and partners can trust."],
      ["Right-sized architecture", "Microservices only when they solve a real problem."],
      ["Security by default", "Authentication, authorisation and auditing built in early."],
      ["Local integration experience", "Familiarity with local payment and telecom integrations."],
      ["Polyglot team", "Node.js, Python, Go, Java, .NET, PHP and Rust under one roof."],
      ["Observable systems", "Logs, metrics and traces from day one."],
    ]),
    stats: [
      { value: "12", label: "Backend languages & frameworks in our stack" },
      { value: "99.9%", label: "Availability target we design for" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["mobile-money-checkout", "clinic-records-platform", "logistics-control-tower"],
    spotlight: {
      slug: "mobile-money-checkout",
      challenge: "A multi-branch retailer had to accept mobile money, bank transfers and cards, and reconcile them by hand every day.",
      solution: "A Go payment service with idempotent transaction handling, provider webhooks and automatic daily reconciliation against PostgreSQL records.",
      result: "Every payment method flows through one checkout, and reconciliation runs automatically instead of by spreadsheet.",
      metric: { value: "Auto", label: "Reconciliation" },
    },
    faqs: [
      { q: "Which backend language do you recommend?", a: "We match the language to the job and your team: Node.js or Python for most products, Go for high-throughput services, Java or .NET for enterprise ecosystems." },
      { q: "Microservices or a monolith?", a: "Most products start best as a well-structured modular monolith. We split out services when scale or team structure clearly calls for it." },
      { q: "Can you integrate local payment methods?", a: "Yes. We integrate mobile money, bank and card providers with webhooks, retries and reconciliation so payments are not lost or duplicated." },
      { q: "How do you secure backends?", a: "We follow OWASP guidance, use strong authentication, least-privilege access, encrypted secrets, audit logs and regular dependency updates." },
    ],
  },

  "database-engineering": {
    heroHighlight: "Design",
    heroRest: "Data Layers That Stay Consistent, Fast and Recoverable",
    heroLead: "Relational, document, search and time-series databases modelled around real queries, tuned for speed and protected with tested backups and replication.",
    specs: [
      { icon: "database", text: "Schema & data modelling" },
      { icon: "gauge", text: "Query performance tuning" },
      { icon: "refresh", text: "Replication & high availability" },
      { icon: "hardDrive", text: "Backups with tested restores" },
      { icon: "search", text: "Full-text & vector search" },
      { icon: "lock", text: "Encryption & access control" },
    ],
    techCta: "Review Your Data Layer",
    expertise: [
      { icon: "database", title: "Data Modelling", text: "Schemas designed around how your application reads and writes, so queries stay simple and fast.", bullets: ["Relational design", "Document modelling", "Indexing strategy", "Migrations", "Multi-tenant schemas"] },
      { icon: "gauge", title: "Performance Tuning", text: "Find and fix the slow queries, missing indexes and configuration issues that slow products down.", bullets: ["Query plan analysis", "Index optimisation", "Connection pooling", "Caching layers", "Partitioning"] },
      { icon: "refresh", title: "Availability & Recovery", text: "Replication, failover and backups that are tested, not assumed.", bullets: ["Streaming replication", "Automated failover", "Point-in-time recovery", "Restore drills", "Disaster recovery plans"] },
      { icon: "search", title: "Search & Specialised Stores", text: "The right specialised store for search, caching, time-series or offline sync.", bullets: ["Elasticsearch", "pgvector", "Redis", "InfluxDB", "CouchDB sync"] },
    ],
    solutions: [
      { title: "Database architecture", text: "Choose and design the right databases for your product's workload." },
      { title: "Performance optimisation", text: "Faster queries and lower load through indexing, tuning and caching." },
      { title: "Database migrations", text: "Move between engines or versions with minimal downtime." },
      { title: "High availability setups", text: "Replication and failover for systems that cannot go down." },
      { title: "Backup & disaster recovery", text: "Automated backups with regular, documented restore tests." },
      { title: "Search implementation", text: "Fast, relevant search for products, content and documents." },
      { title: "Offline data sync", text: "Local databases that sync with the server for field and mobile apps." },
      { title: "Data security reviews", text: "Access control, encryption and audit logging assessed and improved." },
    ],
    challenges: [
      "Slow queries that grow worse as data volume increases.",
      "Migrating large databases without long downtime.",
      "Guaranteeing backups actually restore when needed.",
      "Keeping data consistent across services and offline devices.",
    ],
    chooseUs: choose([
      ["Query-driven modelling", "Schemas designed from real access patterns."],
      ["Measured tuning", "Changes backed by query plans and benchmarks."],
      ["Tested recovery", "Backups proven by regular restore drills."],
      ["Multi-engine experience", "Relational, document, search and time-series databases."],
      ["Offline sync expertise", "Experience with local-first data for low-connectivity regions."],
      ["Security and compliance", "Encryption, access control and audit trails as standard."],
    ]),
    stats: [
      { value: "12", label: "Database engines in our stack" },
      { value: "RPO", label: "Defined recovery point for every system" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["clinic-records-platform", "logistics-control-tower", "agri-marketplace"],
    spotlight: {
      slug: "clinic-records-platform",
      challenge: "A network of clinics needed patient records that were fast to search, strictly access-controlled and never at risk of loss.",
      solution: "A PostgreSQL design with row-level access rules, audit tables, streaming replication and automated point-in-time backups.",
      result: "Clinicians find records quickly, every access is logged, and recovery procedures are documented and rehearsed.",
      metric: { value: "Audited", label: "Every record access" },
    },
    faqs: [
      { q: "SQL or NoSQL: which should we use?", a: "Most products are best served by a relational database such as PostgreSQL. We add document, search or time-series stores when a workload clearly needs them." },
      { q: "Can you speed up our existing database?", a: "Usually, yes. We analyse slow queries and query plans, then fix indexing, queries and configuration, measuring the impact of each change." },
      { q: "How do you handle database migrations?", a: "We plan migrations with replication or dual writes, rehearse them on copies of production data, and keep a tested rollback path." },
      { q: "How do you protect our data?", a: "Encryption in transit and at rest, least-privilege access, audit logging, and automated backups with regular restore tests." },
    ],
  },

  "cloud-services": {
    heroHighlight: "Run",
    heroRest: "Cloud Infrastructure That Is Secure, Observable and Cost-Aware",
    heroLead: "Architecture, migration and operations on AWS, Azure, Google Cloud and developer clouds, plus private and in-country options when data must stay local.",
    specs: [
      { icon: "cloud", text: "Multi-cloud architecture" },
      { icon: "lock", text: "Least-privilege security" },
      { icon: "chart", text: "Cost monitoring & optimisation" },
      { icon: "refresh", text: "Migrations with minimal downtime" },
      { icon: "server", text: "Private & in-country hosting" },
      { icon: "activity", text: "24/7-ready monitoring" },
    ],
    techCta: "Plan Your Cloud Setup",
    expertise: [
      { icon: "cloud", title: "Cloud Architecture", text: "Designs that balance reliability, security and cost, documented and built as code.", bullets: ["Well-architected reviews", "Networking & VPCs", "Containers & serverless", "Multi-region design", "Infrastructure as code"] },
      { icon: "refresh", title: "Cloud Migration", text: "Move applications from on-premise servers or other clouds with careful planning and rollback.", bullets: ["Discovery & assessment", "Rehost & replatform", "Database migration", "Cutover planning", "Post-migration tuning"] },
      { icon: "chart", title: "Cost Optimisation", text: "Visibility and controls that keep cloud bills predictable.", bullets: ["Right-sizing", "Reserved capacity", "Auto-scaling", "Budgets & alerts", "Storage lifecycle"] },
      { icon: "lock", title: "Security & Compliance", text: "Identity, network and data protection set up correctly from the start.", bullets: ["IAM least privilege", "Encryption", "WAF & DDoS protection", "Audit logging", "Data residency"] },
    ],
    solutions: [
      { title: "Cloud architecture design", text: "Reliable, secure and cost-aware designs for new products." },
      { title: "Cloud migration", text: "Move existing systems to the cloud with minimal disruption." },
      { title: "Managed cloud operations", text: "Monitoring, patching and incident response for your infrastructure." },
      { title: "Serverless applications", text: "Event-driven systems that scale automatically and cost less when idle." },
      { title: "Cost reduction reviews", text: "Find and remove waste in existing cloud spending." },
      { title: "Private & hybrid cloud", text: "OpenStack and hybrid setups when data must stay on-premise or in-country." },
      { title: "CDN & edge delivery", text: "Faster, safer delivery of content to users worldwide." },
      { title: "Disaster recovery", text: "Backup and failover plans tested against real scenarios." },
    ],
    challenges: [
      "Keeping cloud costs predictable as usage grows.",
      "Meeting data residency requirements for regulated sectors.",
      "Migrating legacy systems without long outages.",
      "Securing identities, networks and data across many services.",
    ],
    chooseUs: choose([
      ["Infrastructure as code", "Every environment reproducible and reviewed."],
      ["Cost awareness", "Budgets and alerts set up from day one."],
      ["Security by default", "Least-privilege access and encryption everywhere."],
      ["Provider-neutral advice", "We recommend the cloud that fits, including local options."],
      ["Data residency experience", "Private and in-country hosting for sensitive data."],
      ["Operational readiness", "Monitoring, runbooks and on-call processes in place."],
    ]),
    stats: [
      { value: "12", label: "Cloud platforms in our stack" },
      { value: "100%", label: "Infrastructure defined as code (our standard)" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["logistics-control-tower", "mobile-money-checkout", "clinic-records-platform"],
    spotlight: {
      slug: "logistics-control-tower",
      challenge: "A freight operator needed real-time tracking dashboards without cloud costs spiralling as vehicle numbers grew.",
      solution: "An AWS setup defined in Terraform, with event streaming, auto-scaling services and budgets and alerts on every environment.",
      result: "Infrastructure scales with fleet activity, and the team can see and control cost per environment.",
      metric: { value: "IaC", label: "Every environment" },
    },
    faqs: [
      { q: "Which cloud provider should we use?", a: "It depends on your existing tools, budget, compliance and team skills. We compare options honestly, including simpler platforms and private cloud." },
      { q: "Can you reduce our cloud bill?", a: "Usually. We review usage, right-size resources, apply reserved pricing and remove idle resources, then set budgets and alerts." },
      { q: "Can data stay in Ethiopia?", a: "Where required, we design private or hybrid setups that keep sensitive data in-country while using public cloud for other workloads." },
      { q: "Do you provide ongoing cloud operations?", a: "Yes. We offer monitoring, patching, backups and incident response with agreed response times." },
    ],
  },

  "devops-engineering": {
    heroHighlight: "Automate",
    heroRest: "Delivery Pipelines So Your Team Can Release With Confidence",
    heroLead: "CI/CD, containers, infrastructure as code and observability that turn releases into a routine, several times a day.",
    specs: [
      { icon: "git", text: "CI/CD pipelines" },
      { icon: "box", text: "Containers & Kubernetes" },
      { icon: "code", text: "Infrastructure as code" },
      { icon: "activity", text: "Monitoring & alerting" },
      { icon: "shield", text: "DevSecOps scanning" },
      { icon: "clock", text: "Faster, safer releases" },
    ],
    techCta: "Improve Your Delivery",
    expertise: [
      { icon: "git", title: "CI/CD Pipelines", text: "Automated build, test and deployment pipelines that give fast feedback on every change.", bullets: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure Pipelines", "Environment promotion"] },
      { icon: "box", title: "Containers & Orchestration", text: "Containerised workloads on platforms sized to your needs, from Compose to Kubernetes.", bullets: ["Docker images", "Kubernetes", "Helm charts", "GitOps (Argo CD)", "Autoscaling"] },
      { icon: "code", title: "Infrastructure as Code", text: "Reproducible environments defined, reviewed and versioned like application code.", bullets: ["Terraform / OpenTofu", "Ansible", "Reusable modules", "Policy checks", "Drift detection"] },
      { icon: "activity", title: "Observability & Reliability", text: "Metrics, logs and traces that show what is happening and alert before users notice.", bullets: ["Prometheus", "Grafana", "Centralised logging", "Distributed tracing", "SLOs & alerting"] },
    ],
    solutions: [
      { title: "CI/CD implementation", text: "Pipelines that test and deploy every change automatically." },
      { title: "Kubernetes platforms", text: "Production-ready clusters with GitOps deployments." },
      { title: "Infrastructure as code", text: "Terraform and Ansible for every environment." },
      { title: "Observability stacks", text: "Dashboards, logs, traces and alerts that teams actually use." },
      { title: "DevSecOps", text: "Security scanning for code, dependencies and containers in every pipeline." },
      { title: "Release automation", text: "Blue-green and canary releases with quick rollbacks." },
      { title: "Developer environments", text: "Reproducible local setups that onboard developers in minutes." },
      { title: "DevOps assessments", text: "Review of your delivery process with a prioritised roadmap." },
    ],
    challenges: [
      "Slow, manual releases that make teams afraid to deploy.",
      "Environments that drift apart and break in production.",
      "Alert noise that hides real incidents.",
      "Keeping secrets and dependencies secure across pipelines.",
    ],
    chooseUs: choose([
      ["Automation first", "If it is done twice, it gets automated."],
      ["Right-sized platforms", "Kubernetes only when it pays for itself."],
      ["Security in the pipeline", "Scanning and secret management by default."],
      ["Tool-agnostic", "We work with the CI and cloud tools you already have."],
      ["Knowledge transfer", "Your team can own and change everything we build."],
      ["Reliability focus", "SLOs, alerts and runbooks that cut downtime."],
    ]),
    stats: [
      { value: "12", label: "DevOps tools in our stack" },
      { value: "Daily", label: "Release cadence we enable" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["logistics-control-tower", "clinic-records-platform", "mobile-money-checkout"],
    spotlight: {
      slug: "logistics-control-tower",
      challenge: "Releases were manual, infrequent and stressful, and problems were usually reported by customers first.",
      solution: "GitHub Actions pipelines with automated tests, containerised services, Terraform environments and Prometheus and Grafana alerting.",
      result: "Changes ship through a repeatable pipeline, and the team sees issues on dashboards before customers do.",
      metric: { value: "CI/CD", label: "Every change" },
    },
    faqs: [
      { q: "Do we need Kubernetes?", a: "Not always. For many products, managed containers or a PaaS are simpler and cheaper. We recommend Kubernetes when scale or complexity justify it." },
      { q: "Can you work with our existing CI tools?", a: "Yes. We improve pipelines in GitHub Actions, GitLab CI, Jenkins or Azure DevOps rather than forcing a switch." },
      { q: "How do you make deployments safer?", a: "Automated tests, staged environments, canary or blue-green releases, and one-click rollbacks." },
      { q: "Will our team be able to maintain it?", a: "Yes. Everything is code, documented, and handed over with pairing sessions so your team owns it." },
    ],
  },

  "frameworks-platforms": {
    heroHighlight: "Launch",
    heroRest: "Faster on Proven Platforms, Customised to Fit Your Business",
    heroLead: "E-commerce, CMS, ERP and CRM platforms configured, extended and integrated so you get the speed of an established ecosystem without its limits.",
    specs: [
      { icon: "shoppingCart", text: "E-commerce platforms" },
      { icon: "fileText", text: "Headless & traditional CMS" },
      { icon: "boxes", text: "ERP implementation" },
      { icon: "users", text: "CRM customisation" },
      { icon: "plug", text: "Integrations & custom apps" },
      { icon: "gauge", text: "Performance & SEO" },
    ],
    techCta: "Find the Right Platform",
    expertise: [
      { icon: "shoppingCart", title: "E-commerce", text: "Online stores that load fast, convert well and connect to inventory, payments and delivery.", bullets: ["Shopify themes & apps", "Magento extensions", "Headless storefronts", "Payment integrations", "Catalogue migration"] },
      { icon: "fileText", title: "Content Management", text: "CMS setups that let editors publish confidently while developers keep control of the code.", bullets: ["WordPress", "Strapi", "Sanity", "Ghost", "Webflow"] },
      { icon: "boxes", title: "ERP & Business Systems", text: "Business platforms configured around your processes, with custom modules where needed.", bullets: ["Odoo implementation", "SAP integrations", "Custom modules", "Data migration", "User training"] },
      { icon: "users", title: "CRM & Customer Platforms", text: "CRM systems that match your sales and service processes and share data with the rest of the business.", bullets: ["Salesforce customisation", "Workflow automation", "Lightning Web Components", "Data sync", "Reporting dashboards"] },
    ],
    solutions: [
      { title: "Online store builds", text: "Shopify and Magento stores built for speed and conversion." },
      { title: "Headless CMS websites", text: "Editor-friendly content with modern, fast frontends." },
      { title: "ERP implementation", text: "Odoo set up for accounting, inventory, sales and HR." },
      { title: "CRM customisation", text: "Salesforce configured around how your teams sell and support." },
      { title: "Platform integrations", text: "Connect platforms to payments, logistics and internal systems." },
      { title: "Custom plugins & apps", text: "Extensions that add exactly the features you need." },
      { title: "Platform migrations", text: "Move content, products and customers between platforms safely." },
      { title: "Website builder setups", text: "Polished Wix, Squarespace and Webflow sites teams can run themselves." },
    ],
    challenges: [
      "Bending a platform to unusual business processes without breaking upgrades.",
      "Connecting platforms to local payment and delivery providers.",
      "Migrating years of content, products and customer data accurately.",
      "Keeping plugin-heavy sites fast and secure.",
    ],
    chooseUs: choose([
      ["Platform-neutral advice", "We recommend the platform that fits, not the one we sell."],
      ["Upgrade-safe customisation", "Extensions that survive platform updates."],
      ["Security and maintenance", "Updates, backups and monitoring after launch."],
      ["Local integrations", "Experience connecting platforms to local payment and logistics services."],
      ["Clean migrations", "Content and data moved with validation and redirects."],
      ["Editor-friendly setups", "Teams trained to manage content without developer help."],
    ]),
    stats: [
      { value: "12", label: "Platforms in our stack" },
      { value: "ETB", label: "Local currency and tax setups supported" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["agri-marketplace", "mobile-money-checkout", "school-learning-portal"],
    spotlight: {
      slug: "agri-marketplace",
      challenge: "A marketplace needed a storefront, order management and inventory without building every back-office feature from scratch.",
      solution: "An established commerce and back-office platform, extended with custom modules and integrated with local payment and delivery services.",
      result: "The business launched on proven foundations and kept custom development for the features that set it apart.",
      metric: { value: "Proven", label: "Platform foundations" },
    },
    faqs: [
      { q: "Should we use a platform or build custom?", a: "If a platform covers most of your needs, it is usually faster and cheaper. We build custom where your process is your competitive edge." },
      { q: "Can you integrate local payment methods?", a: "Yes. We connect platforms to mobile money, bank and card providers through their APIs or custom extensions." },
      { q: "Can you migrate our existing site or store?", a: "Yes. We migrate content, products, customers and URLs with validation and redirects to protect search rankings." },
      { q: "Do you offer ongoing maintenance?", a: "Yes. We handle updates, security patches, backups and small improvements on a monthly plan." },
    ],
  },

  automation: {
    heroHighlight: "Connect",
    heroRest: "Your Systems and Remove the Manual Busywork",
    heroLead: "Workflow automation and system integration with no-code tools, enterprise iPaaS and custom code, so data moves reliably without copy and paste.",
    specs: [
      { icon: "workflow", text: "Workflow automation" },
      { icon: "plug", text: "System & API integration" },
      { icon: "refresh", text: "Data synchronisation" },
      { icon: "bell", text: "Error alerts & monitoring" },
      { icon: "brain", text: "AI-assisted workflows" },
      { icon: "lock", text: "Secure credential handling" },
    ],
    techCta: "Automate Your Workflows",
    expertise: [
      { icon: "workflow", title: "No-Code & Low-Code Automation", text: "Fast, maintainable automations between everyday business tools.", bullets: ["Zapier", "Make", "n8n", "Power Automate", "IFTTT"] },
      { icon: "plug", title: "Enterprise Integration", text: "Integration platforms that connect core systems with governance and monitoring.", bullets: ["MuleSoft", "Boomi", "Workato", "Celigo", "Tray.io"] },
      { icon: "code", title: "Custom & Developer Integrations", text: "Code-based integrations where off-the-shelf connectors fall short.", bullets: ["Webhooks", "Pipedream", "Custom API connectors", "Event-driven pipelines", "Apache NiFi dataflows"] },
      { icon: "settings", title: "Process Automation (RPA)", text: "Automate repetitive work in legacy and desktop applications without APIs.", bullets: ["Desktop flows", "Document processing", "Approval workflows", "Exception handling", "Process mapping"] },
    ],
    solutions: [
      { title: "Workflow automation", text: "Remove repetitive data entry between your everyday tools." },
      { title: "System integration", text: "Connect ERP, CRM, finance and operations systems reliably." },
      { title: "Data synchronisation", text: "Keep customers, orders and inventory consistent across systems." },
      { title: "Approval & document flows", text: "Digital approvals and document routing instead of paper and email." },
      { title: "AI-assisted automation", text: "Classify, summarise and route requests with AI steps and human review." },
      { title: "Webhook & event processing", text: "React instantly to payments, orders and form submissions." },
      { title: "Legacy system automation", text: "RPA for older systems that offer no API." },
      { title: "Automation audits", text: "Map current processes and find the automations worth building." },
    ],
    challenges: [
      "Automating processes that span legacy systems with no APIs.",
      "Making automations reliable, with alerts instead of silent failures.",
      "Connecting cloud tools with on-premise systems securely.",
      "Measuring the time and cost saved by automation.",
    ],
    chooseUs: choose([
      ["Process first", "We map the process before choosing a tool."],
      ["Right tool for the job", "No-code, iPaaS or custom code, chosen on merit."],
      ["Reliable by design", "Retries, error alerts and logging on every workflow."],
      ["Clear documentation", "Every automation has an owner and a written description."],
      ["Secure integrations", "Credentials stored safely with least-privilege access."],
      ["Measurable outcomes", "Time saved tracked so you can see the return."],
    ]),
    stats: [
      { value: "12", label: "Automation platforms in our stack" },
      { value: "0", label: "Silent failures: every workflow alerts on error" },
      { value: "GMT+3", label: "Overlap with Europe & the Gulf" },
      { value: "14 days", label: "Average team onboarding" },
    ],
    caseStudySlugs: ["mobile-money-checkout", "logistics-control-tower", "amharic-support-assistant"],
    spotlight: {
      slug: "mobile-money-checkout",
      challenge: "Finance staff copied payment confirmations from several providers into spreadsheets and the accounting system by hand.",
      solution: "Webhook-driven workflows that capture each payment, match it to an order, post it to accounting and alert staff on mismatches.",
      result: "Routine reconciliation runs automatically, and staff only handle the exceptions the workflow flags.",
      metric: { value: "Auto", label: "Payment matching" },
    },
    faqs: [
      { q: "Which automation tool should we use?", a: "It depends on volume, complexity, data sensitivity and budget. We often start with no-code tools and move to iPaaS or custom code as needs grow." },
      { q: "What happens when an automation fails?", a: "Every workflow we build has retries, logging and alerts, so failures are seen and fixed rather than silently lost." },
      { q: "Can you automate systems without APIs?", a: "Often, yes, using RPA desktop flows, file-based integration or database connectors, with careful testing." },
      { q: "Can automations keep our data on our own servers?", a: "Yes. Tools such as n8n and Apache NiFi can be self-hosted so data does not leave your infrastructure." },
    ],
  },
};

export function getCategoryDetail(categoryId: string): CategoryDetail | undefined {
  return categoryDetails[categoryId];
}

/** Shared section copy for the technology templates (Arki voice). */
export const techTemplateCopy = {
  category: {
    expertiseLabel: "Expertise",
    primaryCta: "Discuss System Architecture",
    secondaryCta: { label: "Our Framework", href: "/process" },
    toolsTag: "Core Advantages",
    toolsTitle: "Tools & technologies we use",
    toolsDescription: "Proven technologies chosen for performance, reliability and developer experience.",
    excellenceTag: "Development Process",
    excellenceTitle: "Engineering Excellence",
    excellenceDescription: (name: string) => `Deep specialisation across ${name.toLowerCase()}, focused on stable systems and measurable performance.`,
    capabilitiesTag: "Platform Capabilities",
    capabilitiesTitle: "Engineered for scale.",
    capabilitiesDescription: "We close the gap between complex technical problems and business outcomes, for clients in Ethiopia and abroad.",
    archiveTag: "Sample Projects",
    archiveTitle: "Real-world mastery at work",
    caseCta: "Investigate Analysis",
    viewAll: "View All Projects",
    solutionsTag: "Full Spectrum",
    solutionsTitle: "Solutions we deliver",
    solutionsDescription: (name: string) => `End-to-end ${name.toLowerCase()} services built for performance and growth.`,
    statsTitle: "The standards we work to",
    snapshotTag: "Case Study Insight",
    snapshotTitle: "Case Study Snapshot",
    snapshotIntro: (name: string) => `A look at how we approached a ${name.toLowerCase()} problem for`,
    impactLabel: "Design Highlight",
    readAll: "Read All",
    methodTag: "Delivery Excellence",
    methodTitle: "Our Lean-Agile Methodology",
    methodDescription: "A delivery roadmap designed to reduce risk and deliver business value at every stage.",
    chooseTitle: "Choose us because",
    chooseDescription: (name: string) => `Our ${name} services are designed around you, your customers and your growth.`,
  },
  tech: {
    solutions: "Solutions",
    development: "Development",
    tagline: "Services: Quality you can trust.",
    exploreServices: "Explore Services",
    cardSubtitle: "Arki Tech Expertise",
    servicesTag: "Our Services",
    servicesTitle: ["Our", "services at"] as const,
    servicesHighlight: "engineering excellence",
    ctaTitle: "Work with senior engineers who know this stack",
    ctaText: (name: string) => `Our hands-on experience with ${name} keeps your project in capable hands.`,
    ctaButton: "Start Your Project",
    expertiseTag: "Why We Stand Out",
    expertiseTitle: "Our proven guidelines &",
    expertiseHighlight: "expertise areas",
    expertiseDescription: "We combine deep technical skill with proven engineering practice to deliver resilient, scalable solutions.",
    challengesTitle: "Technical challenges we solve",
    challengesDescription: "Real problems that need hands-on experience and production-tested solutions.",
    stackTag: "Tech Stack",
    stackDescription: "Technologies chosen for performance, reliability and developer experience.",
    chooseTag: "Why Choose Us",
    chooseTitle: "What makes us a",
    chooseHighlight: "perfect partner",
    chooseDescription: (name: string) => `As your ${name} partner, we bring a skilled team and well-established methods to deliver outstanding results.`,
    spotlightTag: "Sample Spotlight",
    spotlightPrefix: "Case Study:",
  },
  faqDescription: "Questions about how we work, what to expect, or how we structure engagements? The answers most clients ask about, below.",
  methodology: [
    { icon: "search", title: "Analysis & Modelling", text: "Requirements, business logic and feasibility worked through before code." },
    { icon: "file", title: "POC & MVP Design", text: "Fast validation through a proof of concept or a production-ready MVP." },
    { icon: "check", title: "Secure Release", text: "Hardening, automated deployment and production monitoring." },
  ],
  engine: { title: "The Engine", sprints: "1-4 Week Sprints", caption: "Development & Re-engineering" },
  methodTags: ["Continuous Feedback", "Rapid Iteration", "Production Hardening"],
};
