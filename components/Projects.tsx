"use client";

import "@/styles/Projects.css";
import Image from "next/image";
import portfolio from "@/public/assets/img/portfolio.png";
import summarease from "@/public/assets/img/summarease.png";
import promptshare from "@/public/assets/img/promptshare.png";
import carshowcase from "@/public/assets/img/carshowcase.png";

import { SectionHeader, CustomButton } from ".";

interface Props {
  section: number;
}

function Projects({ section }: Props) {
  return (
    <section id="projects">
      <SectionHeader number={section} title="Projects" />
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <a href="https://www.jasonzubiate.com">
                Portfo <br />
                lio
              </a>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                This is my personal website which contains a portfolio, resume,
                and a bit about me. I built it with many fresh{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                features such as custom{" "}
                <a
                  href="https://legacy.reactjs.org/docs/hooks-custom.html"
                  className="link"
                >
                  hooks
                </a>{" "}
                and{" "}
                <a href="https://greensock.com/gsap/" className="link">
                  gsap
                </a>{" "}
                for animiations.
              </p>
              <div className="btn-group">
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href = "https://www.jasonzubiate.com")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/portfolio2023")
                  }
                />
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image
              src={portfolio}
              alt="Portfolio Image"
              className="img"
              priority
            />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <a href="https://summar-ease-jz.vercel.app/">
                Summar <br />
                Ease
              </a>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                An AI article summarizer powered by{" "}
                <a href="https://openai.com/chatgpt" className="link">
                  OpenAI
                </a>{" "}
                and{" "}
                <a
                  href="https://rapidapi.com/restyler/api/article-extractor-and-summarizer?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=referral&utm_campaign=DevRel"
                  className="link"
                >
                  Rapid API
                </a>
                . This build uses{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                along with{" "}
                <a href="https://redux-toolkit.js.org/" className="link">
                  Redux Toolkit
                </a>{" "}
                for state management. The minimalist styling is done with{" "}
                <a href="https://tailwindcss.com/" className="link">
                  Tailwind CSS
                </a>
                .
              </p>
              <div className="btn-group">
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://summar-ease-jz.vercel.app/")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/SummarEase")
                  }
                />
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image
              src={summarease}
              alt="summarease_img"
              className="img"
              priority
            />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <span>
                <a href="https://prompt-share-jz.vercel.app">PromptS</a>
              </span>
              <span>
                <a href="https://prompt-share-jz.vercel.app">hare</a>
              </span>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                A CRUD web application to share helpful prompts and obtian the
                best responses from ai models such as chatgpt. It&apos;s built
                with{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                and connects to a{" "}
                <a href="https://www.mongodb.com/" className="link">
                  mongodb
                </a>{" "}
                server to store user accounts and posts. The styling is done
                with{" "}
                <a href="https://tailwindcss.com/" className="link">
                  Tailwind CSS
                </a>
                .
              </p>
              <div className="btn-group">
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://prompt-share-jz.vercel.app")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/PromptShare")
                  }
                />
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image
              src={promptshare}
              alt="Promptshare Image"
              className="img"
              priority
            />
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="content">
          <div className="project-info">
            <h3 className="text-2xl project-title uppercase">
              <span>
                <a href="https://car-showcase-jz.vercel.app/">Carshow</a>
              </span>
              <span>
                <a href="https://car-showcase-jz.vercel.app/">case</a>
              </span>
            </h3>
            <div className="project-other">
              <p className="text-m project-description uppercase">
                A modern car rental platform built with{" "}
                <a href="https://react.dev/" className="link">
                  react
                </a>{" "}
                &{" "}
                <a href="https://nextjs.org/" className="link">
                  next.js
                </a>{" "}
                features inlcuding server-side rendering. It uses{" "}
                <a
                  href="https://rapidapi.com/apininjas/api/cars-by-api-ninjas"
                  className="link"
                >
                  rapid api
                </a>{" "}
                for fetching detailed car data and{" "}
                <a href="https://tailwindcss.com/" className="link">
                  Tailwind CSS
                </a>{" "}
                for styling.
              </p>
              <div className="btn-group">
                <CustomButton
                  title="Live Demo"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://car-showcase-jz.vercel.app/")
                  }
                />
                <CustomButton
                  title="Github"
                  textStyles="text-m"
                  handleClick={() =>
                    (window.location.href =
                      "https://github.com/jasonzubiate/car_showcase")
                  }
                />
              </div>
            </div>
          </div>
          <div className="project-img">
            <Image
              src={carshowcase}
              className="img"
              alt="Car Showcase"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
