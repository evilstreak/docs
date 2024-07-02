module.exports = [
  {
    title: "Migrate your data to Timescale Cloud",
    href: "migrate",
    excerpt: "Migrating your data to Timescale",
    children: [
      {
        title: "Migration with downtime",
        href: "pg-dump-and-restore",
        excerpt:
            "Migrate a hypertable or entire database with native PostgreSQL commands",
      },
      {
        title: "Live migration",
        href: "live-migration",
        excerpt: "Migrate a large database with low downtime",
      },
      {
        title: "Dual write and backfill",
        href: "dual-write-and-backfill",
        excerpt: "Migrate a large database with low downtime",
      },
      {
        title: "Troubleshooting",
        href: "troubleshooting",
        excerpt:
            "Troubleshooting known issues in database migrations",
      },
    ],
  },
];
