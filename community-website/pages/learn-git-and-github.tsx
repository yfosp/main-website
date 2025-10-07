/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import ConfettiGenerator from "confetti-js";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.css";
import specificStyles from "../styles/LearnGitAndGitHub.module.css";

const LearnGitAndGitHub: NextPage = () => {
  const currentSlide = useRef(0);
  const slidesRef = useRef<NodeListOf<Element>>();
  const renderButtonsComponent = () => {
    return (
      <div className={specificStyles.navigation}>
        <button
          className={specificStyles.navBtn}
          id="prev-btn"
          onClick={previousSlide}
        >
          ← Previous
        </button>
        <button
          className={specificStyles.navBtn}
          id="next-btn"
          onClick={nextSlide}
        >
          Next →
        </button>
      </div>
    );
  };

  // Show slide
  const showSlide = (n: number) => {
    if (!slidesRef.current) return;
    const slides = slidesRef.current;
    const totalSlides = slides.length;

    slides[currentSlide.current].classList.remove(specificStyles.active);

    currentSlide.current = n;
    if (currentSlide.current >= totalSlides) currentSlide.current = 0;
    if (currentSlide.current < 0) currentSlide.current = totalSlides - 1;

    slides[currentSlide.current].classList.add(specificStyles.active);

    const slideNumberEl = document.getElementById("slide-number");
    const prevBtn = document.getElementById("prev-btn") as HTMLButtonElement;
    const nextBtn = document.getElementById("next-btn") as HTMLButtonElement;

    if (slideNumberEl)
      slideNumberEl.textContent = String(currentSlide.current + 1);
    if (prevBtn) prevBtn.disabled = currentSlide.current === 0;
    if (nextBtn) nextBtn.disabled = currentSlide.current === totalSlides - 1;
  };

  const nextSlide = () => showSlide(currentSlide.current + 1);
  const previousSlide = () => showSlide(currentSlide.current - 1);

  useEffect(() => {
    // Initialize slides
    slidesRef.current = document.querySelectorAll(`.${specificStyles.slide}`);
    const totalSlidesEl = document.getElementById("total-slides");
    if (slidesRef.current && totalSlidesEl)
      totalSlidesEl.textContent = String(slidesRef.current.length);

    showSlide(0);

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        previousSlide();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Confetti
    const confetti = new ConfettiGenerator({ target: "confetti-canvas" });
    confetti.render();

    return () => {
      confetti.clear();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Project Management using Git and GitHub</title>
        <meta name="description" content="YFOSP Learn Git & GitHub" />
        <link rel="icon" href="/earth-asia-solid.svg" />
      </Head>

      <canvas
        id="confetti-canvas"
        className={`${styles.canvas} bg-white dark:bg-black`}
      />

      <main
        className={`${styles.learnGitAndGitHub} text-black dark:text-white`}
      >
        <NavBar />

        <h1 className={styles.title}>
          <a
            href="https://education.github.com/git-cheat-sheet-education.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Management using Git and GitHub 🌍
          </a>
        </h1>

        <p className={styles.description}>
          <Link href="/">{"< Go Back"}</Link>
        </p>

        <div className={specificStyles.slideCounter}>
          <span style={{ fontWeight: "bold" }}>Slide </span>
          <span id="slide-number" style={{ fontWeight: "bold" }}>
            1
          </span>
          <span style={{ fontWeight: "bold" }}> / </span>
          <span id="total-slides" style={{ fontWeight: "bold" }}>
            15
          </span>
        </div>

        <div className={specificStyles.presentationContainer}>
          {/* Slide 1 */}
          <div
            className={`${specificStyles.slide} ${specificStyles.active} ${specificStyles.titleSlide}`}
          >
            <h1>Project Management using Git and GitHub</h1>
            <p>Version Control Systems for Modern Development</p>
            <p style={{ marginTop: 40, fontSize: "1.2em" }}>
              A Complete Guide to Git, GitHub, and Project Management
            </p>
            {renderButtonsComponent()}
          </div>

          {/* Slide 2 */}
          <div className={specificStyles.slide}>
            <h2>What is Version Control?</h2>
            <p>
              Version Control Systems (VCS) track changes to files and
              coordinate work among multiple people.
            </p>
            <h3>Key Benefits:</h3>
            <ul>
              <li>
                <strong>Track Changes:</strong> See what changed, when, and who
                made the change
              </li>
              <li>
                <strong>Backup & Recovery:</strong> Never lose your work with
                complete history
              </li>
              <li>
                <strong>Collaboration:</strong> Multiple developers can work on
                the same project
              </li>
              <li>
                <strong>Branching:</strong> Work on features independently
                without affecting main code
              </li>
              <li>
                <strong>Rollback:</strong> Easily revert to previous working
                versions
              </li>
            </ul>
            {renderButtonsComponent()}
          </div>

          {/* Slide 3 */}
          <div className={specificStyles.slide}>
            <h2>Centralized vs Distributed Version Control</h2>
            <div className={specificStyles.cvsVsDvs}>
              <img
                src="/cvcs&dvcs.png"
                alt="Centralized vs Distributed Version Control"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  marginBottom: 24,
                }}
              />
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 4 */}
          <div className={specificStyles.slide}>
            <h2>What is Git?</h2>
            <p>
              Git is a free, open-source distributed version control system
              designed to handle everything from small to very large projects
              with speed and efficiency.
            </p>
            <div className={specificStyles.featureGrid}>
              <div className={specificStyles.featureCard}>
                <h3>Fast & Efficient</h3>
                <p>Optimized for performance with intelligent compression</p>
              </div>
              <div className={specificStyles.featureCard}>
                <h3>Distributed</h3>
                <p>Every working directory is a full-fledged repository</p>
              </div>
              <div className={specificStyles.featureCard}>
                <h3>Data Integrity</h3>
                <p>Everything is checksummed using SHA-1 and SHA-256 hash</p>
              </div>
              <div className={specificStyles.featureCard}>
                <h3>Branching</h3>
                <p>Cheap local branching and easy merging</p>
              </div>
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 5 */}
          <div className={specificStyles.slide}>
            <h2>What is GitHub?</h2>
            <p>
              GitHub is a cloud-based hosting service for Git repositories,
              providing a web-based interface and additional collaboration
              features.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>Repository Hosting:</strong> Store and manage Git
                repositories in the cloud
              </li>
              <li>
                <strong>Collaboration Tools:</strong> Issues, pull requests,
                code reviews
              </li>
              <li>
                <strong>Project Management:</strong> Projects, milestones, and
                task tracking
              </li>
              <li>
                <strong>CI/CD:</strong> GitHub Actions for automated workflows
              </li>
              <li>
                <strong>Documentation:</strong> Wiki, README files, and GitHub
                Pages
              </li>
              <li>
                <strong>Social Coding:</strong> Follow developers, star
                repositories, contribute to open source
              </li>
            </ul>
            {renderButtonsComponent()}
          </div>

          {/* Slide 6 */}
          <div className={specificStyles.slide}>
            <h2>Git Setup and Installation</h2>
            <h3>1. Install Git</h3>
            <div className={specificStyles.codeBlock}>
              # Windows: Download from git-scm.com <br />
              # macOS: brew install git <br />
              # Ubuntu/Debian: sudo apt install git <br /># CentOS/RHEL: sudo
              yum install git
            </div>
            <h3>2. Configure Git</h3>
            <div className={specificStyles.codeBlock}>
              git config --global user.name &quot;Your Name&quot; <br />
              git config --global user.email &quot;your.email@example.com&quot;{" "}
              <br />
              git config --global init.defaultBranch main
            </div>
            <h3>3. Verify Installation</h3>
            <div className={specificStyles.codeBlock}>
              git --version <br />
              git config --list
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 7 */}
          <div className={specificStyles.slide}>
            <h2>GitHub Setup</h2>
            <h3>1. Create GitHub Account</h3>
            <p>
              Visit <strong>github.com</strong> and sign up for a free account
            </p>
            <h3>2. Set up SSH Key (Recommended)</h3>
            <div className={specificStyles.codeBlock}>
              # Generate SSH key <br />
              ssh-keygen -t ed25519 -C &quot;your.email@example.com&quot; <br />
              # Add SSH key to ssh-agent <br />
              eval &quot;$(ssh-agent -s)&quot; <br />
              ssh-add ~/.ssh/id_ed25519 <br />
              # Copy public key to GitHub <br />
              cat ~/.ssh/id_ed25519.pub
            </div>
            <h3>3. Alternative: Personal Access Token</h3>
            <p>
              Go to GitHub Settings → Developer settings → Personal access
              tokens → Generate new token
            </p>
            {renderButtonsComponent()}
          </div>

          {/* Slide 8 */}
          <div className={specificStyles.slide}>
            <h2>Essential Git Commands - Basics</h2>
            <div className={specificStyles.commandList}>
              <div className={specificStyles.command}>git init</div>
              <div>Initialize a new Git repository</div>
              <div className={specificStyles.command}>
                git clone &lt;url&gt;
              </div>
              <div>Clone a remote repository</div>
              <div className={specificStyles.command}>git status</div>
              <div>Check repository status</div>
              <div className={specificStyles.command}>git add &lt;file&gt;</div>
              <div>Stage changes for commit</div>
              <div className={specificStyles.command}>git add .</div>
              <div>Stage all changes</div>
              <div className={specificStyles.command}>
                git commit -m &quot;message&quot;
              </div>
              <div>Commit staged changes</div>
              <div className={specificStyles.command}>git log</div>
              <div>View commit history</div>
              <div className={specificStyles.command}>git diff</div>
              <div>Show unstaged changes</div>
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 9 */}
          <div className={specificStyles.slide}>
            <h2>Essential Git Commands - Branching</h2>
            <div className={specificStyles.commandList}>
              <div className={specificStyles.command}>git branch</div>
              <div>List all branches</div>
              <div className={specificStyles.command}>
                git branch &lt;name&gt;
              </div>
              <div>Create a new branch</div>
              <div className={specificStyles.command}>
                git checkout &lt;branch&gt;
              </div>
              <div>Switch to a branch</div>
              <div className={specificStyles.command}>
                git checkout -b &lt;name&gt;
              </div>
              <div>Create and switch to new branch</div>
              <div className={specificStyles.command}>
                git merge &lt;branch&gt;
              </div>
              <div>Merge branch into current branch</div>
              <div className={specificStyles.command}>
                git branch -d &lt;name&gt;
              </div>
              <div>Delete a branch</div>
              <div className={specificStyles.command}>git stash</div>
              <div>Temporarily save changes</div>
              <div className={specificStyles.command}>git stash pop</div>
              <div>Apply and remove stashed changes</div>
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 10 */}
          <div className={specificStyles.slide}>
            <h2>Essential Git Commands - Remote</h2>
            <div className={specificStyles.commandList}>
              <div className={specificStyles.command}>git remote -v</div>
              <div>Show remote repositories</div>
              <div className={specificStyles.command}>
                git remote add origin &lt;url&gt;
              </div>
              <div>Add a remote repository</div>
              <div className={specificStyles.command}>git push origin main</div>
              <div>Push commits to remote</div>
              <div className={specificStyles.command}>git pull origin main</div>
              <div>Pull changes from remote</div>
              <div className={specificStyles.command}>git fetch</div>
              <div>Download remote changes (no merge)</div>
              <div className={specificStyles.command}>
                git push -u origin &lt;branch&gt;
              </div>
              <div>Push and set upstream branch</div>
              <div className={specificStyles.command}>
                git clone &lt;url&gt;
              </div>
              <div>Clone remote repository</div>
              <div className={specificStyles.command}>
                git remote remove &lt;name&gt;
              </div>
              <div>Remove a remote repository</div>
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 11 */}
          <div className={specificStyles.slide}>
            <h2>Git Three-Stage Architecture</h2>
            <div className={specificStyles.diagramContainer}>
              <img
                src="/git-3-tier-architecture.png"
                alt="Git Three-Stage Architecture Diagram"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              />
            </div>
            <div className={specificStyles.codeBlock}>
              # Example workflow <br />
              echo &quot;Hello World&quot; {">"} hello.txt <br />
              git add hello.txt <br />
              git commit -m &quot;Add hello file&quot; <br />
              git push origin main
            </div>
            {renderButtonsComponent()}
          </div>

          {/* Slide 12 */}
          <div className={specificStyles.slide}>
            <h2>GitHub Project Management Features</h2>
            <div className={specificStyles.featureGrid}>
              <div className={specificStyles.featureCard}>
                <h3>Issues</h3>
                <p>
                  Track bugs, feature requests, and tasks with labels,
                  assignees, and milestones
                </p>
              </div>
              <div className={specificStyles.featureCard}>
                <h3>Pull Requests</h3>
                <p>
                  Code review process, discuss changes, and collaborate before
                  merging
                </p>
              </div>
              <div className={specificStyles.featureCard}>
                <h3>Projects</h3>
                <p>
                  Kanban-style boards to organize and prioritize work across
                  repositories
                </p>
              </div>
              <div className={specificStyles.featureCard}>
                <h3>Milestones</h3>
                <p>
                  Group issues and pull requests into release cycles or project
                  phases
                </p>
              </div>
            </div>
            <h3>Additional Features:</h3>
            <ul>
              <li>
                <strong>Wiki:</strong> Documentation and knowledge base
              </li>
              <li>
                <strong>Actions:</strong> CI/CD workflows and automation
              </li>
              <li>
                <strong>Releases:</strong> Package and distribute software
                versions
              </li>
            </ul>
            {renderButtonsComponent()}
          </div>

          {/* Slide 13 */}
          <div className={specificStyles.slide}>
            <h2>Git vs GitHub</h2>
            <img
              src="/gitVsgithub.png"
              alt="Git vs GitHub"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                margin: "24px 0",
              }}
            />
            {renderButtonsComponent()}
          </div>

          {/* Slide 14 */}
          <div className={specificStyles.slide}>
            <h2>Git & GitHub Best Practices</h2>
            <h3>Commit Best Practices:</h3>
            <ul>
              <li>
                <strong>Clear Messages:</strong> Use present tense, imperative
                mood
              </li>
              <li>
                <strong>Atomic Commits:</strong> One logical change per commit
              </li>
              <li>
                <strong>Regular Commits:</strong> Commit early and often
              </li>
            </ul>
            <h3>Project Management Best Practices:</h3>
            <ul>
              <li>
                <strong>Use Issues:</strong> Track all work items and
                discussions
              </li>
              <li>
                <strong>Link Issues:</strong> Reference issues in commits and
                PRs
              </li>
              <li>
                <strong>Code Reviews:</strong> Always use pull requests for main
                branch
              </li>
              <li>
                <strong>Documentation:</strong> Keep README and docs updated
              </li>
              <li>
                <strong>Branching:</strong> Use descriptive branch names
              </li>
              <li>
                <strong>Tags:</strong> Mark important releases and versions
              </li>
            </ul>
            {renderButtonsComponent()}
          </div>

          {/* Slide 15 */}
          <div className={specificStyles.slide}>
            <h2>Summary</h2>
            <h3>What We&apos;ve Covered:</h3>
            <ul>
              <li>
                <strong>Version Control Systems:</strong> CVS vs DVS concepts
              </li>
              <li>
                <strong>Git Fundamentals:</strong> Installation, configuration,
                and core concepts
              </li>
              <li>
                <strong>GitHub Platform:</strong> Cloud-based collaboration and
                project management
              </li>
              <li>
                <strong>Essential Commands:</strong> Complete toolkit for daily
                Git operations
              </li>
              <li>
                <strong>Project Management:</strong> Issues, pull requests, and
                workflow strategies
              </li>
              <li>
                <strong>Best Practices:</strong> Professional development
                workflows
              </li>
            </ul>
            <h3>Next Steps:</h3>
            <ul>
              <li>Practice with a sample project</li>
              <li>{`Explore GitHub's advanced features`}</li>
              <li>Implement a branching strategy</li>
              <li>Set up automated workflows with GitHub Actions</li>
            </ul>
            {renderButtonsComponent()}
          </div>
        </div>
      </main>

      <footer className={`${styles.footer} text-black dark:text-white`}>
        <a
          href="https://hacktoberfest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by the community for Hacktoberfest with ❤️
        </a>
      </footer>
    </div>
  );
};

export default LearnGitAndGitHub;
