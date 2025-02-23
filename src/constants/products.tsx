import pytql from "public/images/pytql.png";
import pytql2 from "public/images/pytql2.png";
import testplan from "public/images/testplan.png";
import testplan2 from "public/images/testplan2.png";
import episode from "public/images/episode.png";

export const products = [
  {
    href: "https://attakay78.github.io/Pytql/",
    title: "Pytql",
    description:
      "PyTQL is a simple python table data type with some query operations.",
    thumbnail: pytql,
    images: [pytql, pytql2],
    stack: ["Python",],
    slug: "pytql",
    content: (
      <div>
        <p>
        Pytql is a Python library that brings SQL-like functionality to tabular data, letting you filter, join, and query datasets right in your code. Hosted at attakay78.github.io/Pytql/, this project by Attakay78 offers a lightweight, in-memory solution for data manipulation—no external database required. Check out the site for installation guides, examples, and more.
        </p>
      </div>
    ),
  },
  {
    href: "https://testplan.readthedocs.io/en/24.9.2/",
    title: "Testplan",
    description:
      "A multi-testing framework",
    thumbnail: testplan,
    images: [testplan, testplan2],
    stack: ["Python", "JavaScript", "C++", "Shell"],
    slug: "testplan",
    content: (
      <div>
        <p>
        Testplan is a Python package that can start a local live environment, setup mocks, connections to services and run tests against these. It provides:
        <ul>
          <li>MultiTest a feature extensive functional testing system with a rich set of assertions and report rendering logic.</li>
          <li>Built-in inheritable drivers to create a local live environment.</li>
          <li>Configurable, diverse and expandable test execution mechanism including parallel execution capability.</li>
          <li>Test tagging for flexible filtering and selective execution as well as generation of multiple reports (for each tag combination).</li>
          <li>Integration with other unit testing frameworks (like GTest).</li>
          <li>Rich, unified reports (json/PDF/XML) and soon (HTML/UI).</li>
        </ul>
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/Attakay78/Episode",
    title: "Episode",
    description:
      "A python backend framework with rich features, easy to learn and fast to code.",
    thumbnail: episode,
    images: [episode],
    stack: ["Python", "HTML"],
    slug: "episode",
    content: (
      <div>
        <p>
        <strong>The Key features are:</strong>
        <ul>
          <li><strong>Fast Router:</strong> Has a fast routing system that speeds up request to response time</li>
          <li><strong>ORM:</strong> Has an inbuilt ORM that supports SQLite, MySQL and MongoDB database</li>
          <li><strong>Template Engine:</strong> Minimalist integrated template engine for integrating your python code with html</li>
          <li><strong>Fast to code:</strong> Increase the speed to develop features</li>
          <li><strong>Easy:</strong> Designed to be easy to use and learn. Less time reading docs</li>
          <li><strong>Short:</strong> Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs</li>
        </ul>
        </p>
      </div>
    ),
  },
];
