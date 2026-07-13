"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { locations } from "@/data/profile";

export function IrelandMap() {
  const [activeId, setActiveId] = useState("dublin");
  const active = locations.find((location) => location.id === activeId) ?? locations[0];

  return (
    <div className="ireland-explorer">
      <div className="map-stage">
        <div className="map-coordinates" aria-hidden="true">
          <span>53.3498° N</span>
          <span>06.2603° W</span>
        </div>
        <svg
          className="ireland-shape"
          viewBox="0 0 260 300"
          role="img"
          aria-label="Stylised map of Ireland with target employment hubs"
        >
          <defs>
            <linearGradient id="ireland-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#252820" />
              <stop offset="1" stopColor="#141510" />
            </linearGradient>
            <filter id="map-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="map-outline"
            d="M111 16 C91 24 91 40 73 48 C54 57 62 73 43 83 C25 93 34 110 20 125 C10 137 28 151 25 168 C22 185 39 197 48 207 C58 219 51 239 69 248 C83 255 91 282 112 281 C130 280 137 266 154 258 C174 249 186 240 192 222 C201 204 220 199 223 179 C227 158 214 149 216 130 C219 112 203 104 198 89 C192 73 183 59 166 54 C148 48 148 26 129 20 C123 18 117 17 111 16 Z"
            fill="url(#ireland-fill)"
          />
          <path
            className="map-inner-line"
            d="M75 54 C109 74 126 96 130 126 C134 157 120 176 123 205 C126 231 144 249 165 258"
          />
          <path
            className="map-inner-line"
            d="M30 132 C66 124 91 137 112 158 C132 178 163 187 211 178"
          />
          <circle
            cx={active.x}
            cy={active.y}
            r="17"
            fill="none"
            stroke="#63f3cf"
            opacity="0.35"
            filter="url(#map-glow)"
          />
        </svg>

        {locations.map((location) => (
          <button
            type="button"
            key={location.id}
            className={`map-node ${activeId === location.id ? "is-active" : ""}`}
            style={{ left: `${(location.x / 260) * 100}%`, top: `${(location.y / 300) * 100}%` }}
            aria-label={`Explore finance opportunities in ${location.name}`}
            aria-pressed={activeId === location.id}
            onClick={() => setActiveId(location.id)}
          >
            <span />
            <strong>{location.name}</strong>
          </button>
        ))}
      </div>

      <div className="location-panel" aria-live="polite">
        <div className="location-kicker">
          <MapPin aria-hidden="true" size={15} />
          {active.signal}
        </div>
        <h3>{active.name}</h3>
        <p>{active.description}</p>
        <div className="location-role-list">
          {active.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
        <div className="job-board-links">
          <a
            href="https://www.irishjobs.ie/jobs/graduate-accounting"
            target="_blank"
            rel="noreferrer"
          >
            IrishJobs
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a
            href="https://gradireland.com/careers-advice/accountancy-financial-management"
            target="_blank"
            rel="noreferrer"
          >
            gradIreland
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a
            href="https://jobsireland.ie/"
            target="_blank"
            rel="noreferrer"
          >
            JobsIreland
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
