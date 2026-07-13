"use client";

import { useState } from "react";
import { Check, MoveUpRight } from "lucide-react";
import { roleFits } from "@/data/profile";

export function RoleRadar() {
  const [activeId, setActiveId] = useState(roleFits[0].id);
  const activeRole = roleFits.find((role) => role.id === activeId) ?? roleFits[0];

  return (
    <div className="role-radar">
      <div className="role-list" aria-label="Target role pathways">
        {roleFits.map((role, index) => (
          <button
            type="button"
            key={role.id}
            className={activeId === role.id ? "is-active" : ""}
            aria-pressed={activeId === role.id}
            onClick={() => setActiveId(role.id)}
          >
            <span className="role-number">0{index + 1}</span>
            <span className="role-title">{role.title}</span>
            <span className="role-fit">{role.fit}</span>
            <MoveUpRight aria-hidden="true" size={20} strokeWidth={1.4} />
          </button>
        ))}
      </div>

      <div className="role-detail" aria-live="polite">
        <div className="role-detail-heading">
          <span>Evidence fit</span>
          <span>{activeRole.fit}</span>
        </div>
        <div className="fit-track" aria-hidden="true">
          <span style={{ width: `${activeRole.score}%` }} />
        </div>
        <h3>{activeRole.title}</h3>
        <p>{activeRole.summary}</p>
        <ul>
          {activeRole.evidence.map((item) => (
            <li key={item}>
              <Check aria-hidden="true" size={15} strokeWidth={2} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
