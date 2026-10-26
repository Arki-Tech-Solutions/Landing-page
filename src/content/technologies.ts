/**
 * Technology catalogue: 9 categories x 12 items.
 * Shared by the header "Technologies" menu, the home page tech section,
 * /technologies/[category] and /technologies/[category]/[slug].
 * Icons are open-source logo sets (devicon / simple-icons) served from jsDelivr.
 */
export type TechItem = { slug: string; name: string; icon: string };
export type TechCategory = {
  id: string;
  /** Short label used in the header menu. */
  label: string;
  /** Full title, e.g. "AI & Machine Learning". */
  title: string;
  /** Part of the title rendered in the primary color, followed by rest. */
  hl: string;
  rest: string;
  /** lucide-react icon name. */
  icon: string;
  /** One-liner shown in the header menu. */
  menu: string;
  subtitle: string;
  description: string;
  items: TechItem[];
};

export const techCategories: TechCategory[] = [
  {
    "id": "ai-machine-learning",
    "label": "AI & ML",
    "title": "AI & Machine Learning",
    "hl": "AI",
    "rest": "& Machine Learning",
    "icon": "Cpu",
    "menu": "Generative AI, machine learning and computer vision built into real products.",
    "subtitle": "Turn your data into products that think",
    "description": "From grounded AI assistants to forecasting models and computer vision, our engineers design, train and ship AI features that hold up in production.",
    "items": [
      {
        "slug": "openai",
        "name": "OpenAI",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/openai.svg"
      },
      {
        "slug": "tensorflow",
        "name": "TensorFlow",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      },
      {
        "slug": "pytorch",
        "name": "PyTorch",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
      },
      {
        "slug": "langchain",
        "name": "LangChain",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/langchain.svg"
      },
      {
        "slug": "hugging-face",
        "name": "Hugging Face",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/huggingface.svg"
      },
      {
        "slug": "scikit-learn",
        "name": "Scikit-learn",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/scikitlearn.svg"
      },
      {
        "slug": "numpy",
        "name": "NumPy",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
      },
      {
        "slug": "pandas",
        "name": "Pandas",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
      },
      {
        "slug": "keras",
        "name": "Keras",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/keras.svg"
      },
      {
        "slug": "apache-spark",
        "name": "Apache Spark",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg"
      },
      {
        "slug": "python",
        "name": "Python",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        "slug": "opencv",
        "name": "OpenCV",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
      }
    ]
  },
  {
    "id": "mobile-development",
    "label": "Mobile",
    "title": "Mobile Development",
    "hl": "Mobile",
    "rest": "Development",
    "icon": "Smartphone",
    "menu": "Native and cross-platform apps for iOS and Android.",
    "subtitle": "Apps people keep on their home screen",
    "description": "We build fast, reliable native and cross-platform mobile apps, including offline-first experiences that work on the networks your users actually have.",
    "items": [
      {
        "slug": "kotlin",
        "name": "Kotlin",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
      },
      {
        "slug": "swift",
        "name": "Swift",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
      },
      {
        "slug": "flutter",
        "name": "Flutter",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
      },
      {
        "slug": "reactnative",
        "name": "React Native",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        "slug": "java-android",
        "name": "Java",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        "slug": "ionic",
        "name": "Ionic",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
      },
      {
        "slug": "objectivec",
        "name": "Objective-C",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg"
      },
      {
        "slug": "fastlane",
        "name": "Fastlane",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/fastlane.svg"
      },
      {
        "slug": "firebase-mobile",
        "name": "Firebase",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      },
      {
        "slug": "android-sdk",
        "name": "Android SDK",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
      },
      {
        "slug": "ios-sdk",
        "name": "iOS SDK",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
      },
      {
        "slug": "xamarin",
        "name": "Xamarin",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg"
      }
    ]
  },
  {
    "id": "frontend-engineering",
    "label": "Frontend",
    "title": "Frontend Development",
    "hl": "Frontend",
    "rest": "Development",
    "icon": "Monitor",
    "menu": "Responsive, accessible interfaces with modern frameworks.",
    "subtitle": "Interfaces that feel effortless",
    "description": "Our frontend engineers turn complex workflows into clear, accessible and fast user interfaces, with design systems your team can keep extending.",
    "items": [
      {
        "slug": "react",
        "name": "React",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        "slug": "nextjs",
        "name": "Next.js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        "slug": "angular",
        "name": "Angular",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
      },
      {
        "slug": "vuejs",
        "name": "Vue.JS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
      },
      {
        "slug": "svelte",
        "name": "Svelte",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
      },
      {
        "slug": "typescript",
        "name": "TypeScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      {
        "slug": "javascript",
        "name": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        "slug": "html5",
        "name": "HTML5",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        "slug": "tailwindcss",
        "name": "Tailwind CSS",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/tailwindcss.svg"
      },
      {
        "slug": "bootstrap",
        "name": "Bootstrap",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        "slug": "materialui",
        "name": "Material UI",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
      },
      {
        "slug": "redux",
        "name": "Redux",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
      }
    ]
  },
  {
    "id": "backend-engineering",
    "label": "Backend",
    "title": "Backend Development",
    "hl": "Backend",
    "rest": "Development",
    "icon": "Server",
    "menu": "Secure, scalable APIs and services for complex business logic.",
    "subtitle": "Solid foundations for everything on top",
    "description": "We design APIs, services and integrations that stay secure and maintainable as your traffic, data and team grow.",
    "items": [
      {
        "slug": "nodejs",
        "name": "Node.js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        "slug": "nestjs",
        "name": "NestJS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
      },
      {
        "slug": "python",
        "name": "Python",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        "slug": "django",
        "name": "Django",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
      },
      {
        "slug": "spring-boot",
        "name": "Spring Boot",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
      },
      {
        "slug": "dotnetcore",
        "name": ".Net Core",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
      },
      {
        "slug": "go",
        "name": "Go",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
      },
      {
        "slug": "rails",
        "name": "Ruby on Rails",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
      },
      {
        "slug": "php",
        "name": "PHP",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        "slug": "laravel",
        "name": "Laravel",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
      },
      {
        "slug": "rust",
        "name": "Rust",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg"
      },
      {
        "slug": "express",
        "name": "Express.js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      }
    ]
  },
  {
    "id": "database-engineering",
    "label": "Database",
    "title": "Database Engineering",
    "hl": "Database",
    "rest": "Engineering",
    "icon": "Database",
    "menu": "Data modelling, performance tuning and reliable storage.",
    "subtitle": "Data you can trust and query fast",
    "description": "From schema design to replication and backups, we make sure your data is consistent, fast to query and safe from loss.",
    "items": [
      {
        "slug": "postgresql",
        "name": "PostgreSQL",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      },
      {
        "slug": "mysql",
        "name": "MySQL",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        "slug": "mariadb",
        "name": "MariaDB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
      },
      {
        "slug": "sqlite",
        "name": "SQLite",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
      },
      {
        "slug": "mongodb",
        "name": "MongoDB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        "slug": "redis",
        "name": "Redis",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
      },
      {
        "slug": "elasticsearch",
        "name": "Elasticsearch",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/elasticsearch.svg"
      },
      {
        "slug": "dynamodb",
        "name": "DynamoDB",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/amazondynamodb.svg"
      },
      {
        "slug": "oracle",
        "name": "Oracle",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
      },
      {
        "slug": "cassandra",
        "name": "Cassandra",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/apachecassandra.svg"
      },
      {
        "slug": "influxdb",
        "name": "InfluxDB",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/influxdb.svg"
      },
      {
        "slug": "couchdb",
        "name": "CouchDB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg"
      }
    ]
  },
  {
    "id": "cloud-services",
    "label": "Cloud Services",
    "title": "Cloud Services",
    "hl": "Cloud",
    "rest": "Services",
    "icon": "Cloud",
    "menu": "Migration and infrastructure on the leading cloud providers.",
    "subtitle": "Infrastructure that scales with you",
    "description": "We plan, migrate and run cloud infrastructure that is cost-aware, observable and resilient, on global and regional providers.",
    "items": [
      {
        "slug": "aws",
        "name": "AWS",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonwebservices.svg"
      },
      {
        "slug": "azure",
        "name": "Azure",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
      },
      {
        "slug": "google-cloud",
        "name": "Google Cloud",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
      },
      {
        "slug": "digitalocean",
        "name": "DigitalOcean",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
      },
      {
        "slug": "vercel",
        "name": "Vercel",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg"
      },
      {
        "slug": "netlify",
        "name": "Netlify",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/netlify.svg"
      },
      {
        "slug": "firebase-cloud",
        "name": "Firebase",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      },
      {
        "slug": "cloudflare",
        "name": "Cloudflare",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cloudflare.svg"
      },
      {
        "slug": "heroku",
        "name": "Heroku",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
      },
      {
        "slug": "linode",
        "name": "Linode",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/akamai.svg"
      },
      {
        "slug": "ibm-cloud",
        "name": "IBM Cloud",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibmcloud.svg"
      },
      {
        "slug": "openstack",
        "name": "OpenStack",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openstack.svg"
      }
    ]
  },
  {
    "id": "devops-engineering",
    "label": "DevOps",
    "title": "DevOps Services",
    "hl": "DevOps",
    "rest": "Services",
    "icon": "Activity",
    "menu": "CI/CD, infrastructure as code and observability.",
    "subtitle": "Ship often, sleep well",
    "description": "Automated pipelines, infrastructure as code and monitoring that let your team release with confidence several times a day.",
    "items": [
      {
        "slug": "docker",
        "name": "Docker",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        "slug": "kubernetes",
        "name": "Kubernetes",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
      },
      {
        "slug": "terraform",
        "name": "Terraform",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
      },
      {
        "slug": "ansible",
        "name": "Ansible",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"
      },
      {
        "slug": "jenkins",
        "name": "Jenkins",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      },
      {
        "slug": "github-actions",
        "name": "GitHub Actions",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/githubactions.svg"
      },
      {
        "slug": "prometheus",
        "name": "Prometheus",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/prometheus.svg"
      },
      {
        "slug": "grafana",
        "name": "Grafana",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
      },
      {
        "slug": "gitlab-ci",
        "name": "GitLab CI",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
      },
      {
        "slug": "azure-devops",
        "name": "Azure DevOps",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
      },
      {
        "slug": "new-relic",
        "name": "New Relic",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/newrelic.svg"
      },
      {
        "slug": "datadog",
        "name": "Datadog",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/datadog.svg"
      }
    ]
  },
  {
    "id": "frameworks-platforms",
    "label": "Frameworks & Platforms",
    "title": "Frameworks & Platforms",
    "hl": "Frameworks",
    "rest": "& Platforms",
    "icon": "Blocks",
    "menu": "Proven ecosystems and platforms for faster delivery.",
    "subtitle": "Proven ecosystems, delivered faster",
    "description": "When an established platform is the right call, we configure, extend and integrate it so you get to market sooner with less risk.",
    "items": [
      {
        "slug": "shopify",
        "name": "Shopify",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shopify.svg"
      },
      {
        "slug": "wordpress",
        "name": "WordPress",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
      },
      {
        "slug": "webflow",
        "name": "Webflow",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/webflow.svg"
      },
      {
        "slug": "magento",
        "name": "Magento",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg"
      },
      {
        "slug": "strapi",
        "name": "Strapi",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/strapi.svg"
      },
      {
        "slug": "sanity",
        "name": "Sanity",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sanity.svg"
      },
      {
        "slug": "ghost",
        "name": "Ghost",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/ghost.svg"
      },
      {
        "slug": "odoo",
        "name": "Odoo",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/odoo.svg"
      },
      {
        "slug": "sap",
        "name": "SAP",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sap.svg"
      },
      {
        "slug": "salesforce",
        "name": "Salesforce",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/salesforce.svg"
      },
      {
        "slug": "wix",
        "name": "Wix",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/wix.svg"
      },
      {
        "slug": "squarespace",
        "name": "Squarespace",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/squarespace.svg"
      }
    ]
  },
  {
    "id": "automation",
    "label": "Automation & Integration",
    "title": "Automation & Integration",
    "hl": "Automation",
    "rest": "& Integration",
    "icon": "Workflow",
    "menu": "Workflow automation and system integration.",
    "subtitle": "Connect your systems, remove the busywork",
    "description": "We connect the tools your business already uses and automate repetitive work, so data flows reliably without manual copy and paste.",
    "items": [
      {
        "slug": "zapier",
        "name": "Zapier",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/zapier.svg"
      },
      {
        "slug": "make-com",
        "name": "Make",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/make.svg"
      },
      {
        "slug": "n8n",
        "name": "n8n",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/n8n.svg"
      },
      {
        "slug": "mulesoft",
        "name": "MuleSoft",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mulesoft.svg"
      },
      {
        "slug": "boomi",
        "name": "Boomi",
        "icon": "https://icon.horse/icon/boomi.com"
      },
      {
        "slug": "nifi",
        "name": "Apache NiFi",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachenifi.svg"
      },
      {
        "slug": "workato",
        "name": "Workato",
        "icon": "/tech-logos/workato.svg"
      },
      {
        "slug": "celigo",
        "name": "Celigo",
        "icon": "https://icon.horse/icon/celigo.com"
      },
      {
        "slug": "ifttt",
        "name": "IFTTT",
        "icon": "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/ifttt.svg"
      },
      {
        "slug": "power-automate",
        "name": "Power Automate",
        "icon": "https://ui-avatars.com/api/?name=Power+Automate&background=0066FF&color=fff"
      },
      {
        "slug": "pipedream",
        "name": "Pipedream",
        "icon": "/tech-logos/pipedream.svg"
      },
      {
        "slug": "tray-io",
        "name": "Tray.io",
        "icon": "https://icon.horse/icon/tray.io"
      }
    ]
  }
];

export function getTechCategory(id: string) {
  return techCategories.find((c) => c.id === id);
}

export function getTechItem(categoryId: string, slug: string) {
  return getTechCategory(categoryId)?.items.find((i) => i.slug === slug);
}


/** Order used by the header Technologies menu (differs from the home page section order). */
const menuOrder = [
  "ai-machine-learning",
  "frontend-engineering",
  "backend-engineering",
  "mobile-development",
  "database-engineering",
  "cloud-services",
  "devops-engineering",
  "frameworks-platforms",
  "automation",
];

export const techMenuCategories: TechCategory[] = menuOrder
  .map((id) => techCategories.find((c) => c.id === id))
  .filter((c): c is TechCategory => Boolean(c));
