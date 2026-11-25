# autoexcute  AI UX Operating System — Tasks Specification (tasks.md)

---

## Cluster 1: Research Agent (Phases 01 – 05)

### Phase 01: Discovery Brief
- **Agent**: Research Agent
- **Dependencies**: None (Initial trigger)
- **Tasks**:
  - [ ] Intake product vision, target market, and initial problem statement.
  - [ ] Define scope boundaries, project constraints, and timeline milestones.
  - [ ] Establish initial hypothesis and success criteria.
- **Deliverable**: `docs/01-discovery-brief.md`

### Phase 02: Stakeholder Goals
- **Agent**: Research Agent
- **Dependencies**: Phase 01
- **Tasks**:
  - [ ] Conduct structured interviews across Product, Engineering, and Business leads.
  - [ ] Map business KPIs, revenue models, and time-to-market constraints.
  - [ ] Resolve conflicting priorities into a single alignment matrix.
- **Deliverable**: `docs/02-stakeholder-goals.md`

### Phase 03: User Interviews
- **Agent**: Research Agent
- **Dependencies**: Phase 02
- **Tasks**:
  - [ ] Draft targeted interview questionnaires and recruiting screeners.
  - [ ] Transcribe and tag qualitative user sessions.
  - [ ] Extract direct quotes, friction points, and unmet user desires.
- **Deliverable**: `docs/03-interview-transcripts.md`

### Phase 04: Competitive Scan
- **Agent**: Research Agent
- **Dependencies**: Phase 03
- **Tasks**:
  - [ ] Benchmark 3–5 direct and indirect competitor solutions.
  - [ ] Perform SWOT and feature matrix comparisons.
  - [ ] Identify differentiation gaps and market opportunities.
- **Deliverable**: `docs/04-competitive-analysis.md`

### Phase 05: Insight Synthesis
- **Agent**: Research Agent
- **Dependencies**: Phase 04
- **Tasks**:
  - [ ] Cluster interview notes and user behavior into thematic affinity maps.
  - [ ] Formulate core problem statements ("How Might We" prompts).
  - [ ] Present actionable research summary to design leadership.
- **Deliverable**: `docs/05-research-synthesis.md`

---

## Cluster 2: Architecture Agent (Phases 06 – 10)

### Phase 06: Personas
- **Agent**: Architecture Agent
- **Dependencies**: Phase 05
- **Tasks**:
  - [ ] Synthesize empirical data into 2–3 actionable primary/secondary personas.
  - [ ] Detail behavioral drivers, technical literacy, pain points, and core jobs-to-be-done.
  - [ ] Define empathy maps for critical scenarios.
- **Deliverable**: `docs/06-user-personas.json` & `docs/06-user-personas.md`

### Phase 07: Customer Journeys
- **Agent**: Architecture Agent
- **Dependencies**: Phase 06
- **Tasks**:
  - [ ] Map end-to-end customer lifecycle: Awareness, Onboarding, Core Loop, Retention.
  - [ ] Document emotional highs/lows, touchpoints, and drop-off risks per step.
  - [ ] Identify key moments that require AI-assisted acceleration.
- **Deliverable**: `docs/07-customer-journey-maps.md`

### Phase 08: Information Architecture
- **Agent**: Architecture Agent
- **Dependencies**: Phase 07
- **Tasks**:
  - [ ] Establish site hierarchy, tree maps, and navigation taxonomy.
  - [ ] Create URL routing structure and content domain schemas.
  - [ ] Validate findability with closed card sorting simulations.
- **Deliverable**: `docs/08-information-architecture.md`

### Phase 09: User Flows
- **Agent**: Architecture Agent
- **Dependencies**: Phase 08
- **Tasks**:
  - [ ] Draft step-by-step decision trees and swimlane flowcharts.
  - [ ] Account for edge cases: network loss, auth failure, empty data, validation errors.
  - [ ] Minimize cognitive load and keystroke counts on critical conversion paths.
- **Deliverable**: `docs/09-user-flows.md`

### Phase 10: Wireframes
- **Agent**: Architecture Agent
- **Dependencies**: Phase 09
- **Tasks**:
  - [ ] Produce low-fidelity structural layouts (mobile-first & desktop).
  - [ ] Define layout grids, content containers, and visual hierarchy.
  - [ ] Confirm layout ergonomics with human design lead.
- **Deliverable**: `docs/10-wireframe-specs.md`

---

## Cluster 3: Design System Agent (Phases 11 – 15)

### Phase 11: Design Tokens
- **Agent**: Design System Agent
- **Dependencies**: Phase 01, Phase 10
- **Tasks**:
  - [ ] Establish semantic design token naming schema (W3C Design Token Community Group standard).
  - [ ] Define color scales (light/dark HSL/OKLCH tokens), spacing scales, and border radii.
  - [ ] Generate machine-readable JSON format for automated code builds.
- **Deliverable**: `tokens/design-tokens.json`

### Phase 12: Typography & Color
- **Agent**: Design System Agent
- **Dependencies**: Phase 11
- **Tasks**:
  - [ ] Select display and body typefaces with responsive fluid scaling (`clamp()`).
  - [ ] Verify WCAG AA/AAA contrast ratios across light and dark modes.
  - [ ] Define intentional status colors (info, success, warning, destructive).
- **Deliverable**: `docs/12-typography-and-color.md`

### Phase 13: Component Library
- **Agent**: Design System Agent
- **Dependencies**: Phase 12
- **Tasks**:
  - [ ] Specify atomic components: Buttons, Inputs, Dialogs, Cards, Badges, Tabs.
  - [ ] Detail interactive states: Default, Hover, Focus-Visible, Active, Disabled.
  - [ ] Map compound components to shadcn/ui primitives.
- **Deliverable**: `docs/13-component-specifications.md`

### Phase 14: Accessibility Rules
- **Agent**: Design System Agent
- **Dependencies**: Phase 13
- **Tasks**:
  - [ ] Specify ARIA roles, states, and landmark configurations per component.
  - [ ] Guarantee full keyboard navigation and focus-trap management.
  - [ ] Provide descriptive screen-reader alternatives for complex graphical data.
- **Deliverable**: `docs/14-accessibility-audit-checklist.md`

### Phase 15: Motion Guidelines
- **Agent**: Design System Agent
- **Dependencies**: Phase 14
- **Tasks**:
  - [ ] Set semantic motion tokens: durations (150ms, 250ms, 400ms) and easing curves.
  - [ ] Define entry, exit, and micro-interaction animation patterns.
  - [ ] Implement strict `prefers-reduced-motion` overrides for zero-motion accessibility.
- **Deliverable**: `docs/15-motion-design-specs.md`

---

## Cluster 4: UI Agent (Phases 16 – 20)

### Phase 16: UI Screens
- **Agent**: UI Agent
- **Dependencies**: Phase 10, Phase 13
- **Tasks**:
  - [ ] Apply tokens and atomic components to complete wireframe layouts.
  - [ ] Polish typographic hierarchy, balance negative space, and render high-fidelity assets.
  - [ ] Verify zero visual regression against design token specifications.
- **Deliverable**: `docs/16-high-fidelity-screens.md`

### Phase 17: Responsive Layouts
- **Agent**: UI Agent
- **Dependencies**: Phase 16
- **Tasks**:
  - [ ] Validate fluid reflow across mobile (375px), tablet (768px), and desktop (1280px+).
  - [ ] Adapt complex navigation elements into ergonomic mobile drawer patterns.
  - [ ] Ensure tap targets conform to minimum 44×44px hit areas.
- **Deliverable**: `docs/17-responsive-breakpoints.md`

### Phase 18: Interactive Prototype
- **Agent**: UI Agent
- **Dependencies**: Phase 15, Phase 17
- **Tasks**:
  - [ ] Connect screens into an end-to-end interactive simulation.
  - [ ] Test micro-animations, loading shimmers, and stateful transitions.
  - [ ] Validate real-device responsiveness on mobile browsers.
- **Deliverable**: `docs/18-prototype-links.md`

### Phase 19: Usability Testing
- **Agent**: UI Agent
- **Dependencies**: Phase 18
- **Tasks**:
  - [ ] Run 5 unmoderated user task sessions with the interactive prototype.
  - [ ] Record task success rate, time-on-task, and System Usability Scale (SUS) scores.
  - [ ] Identify friction bottlenecks in the core workflow.
- **Deliverable**: `docs/19-usability-test-results.md`

### Phase 20: Design Iteration
- **Agent**: UI Agent
- **Dependencies**: Phase 19
- **Tasks**:
  - [ ] Prioritize usability feedback using an Impact vs. Effort matrix.
  - [ ] Refine layouts and copy to eliminate observed user confusion.
  - [ ] Sign off on production-ready design freeze.
- **Deliverable**: `docs/20-final-design-freeze.md`

---

## Cluster 5: Code Agent (Phases 21 – 25)

### Phase 21: Developer Handoff
- **Agent**: Code Agent
- **Dependencies**: Phase 11, Phase 20
- **Tasks**:
  - [ ] Export verified token JSON files directly into CSS custom properties.
  - [ ] Produce TypeScript component interface contracts and prop specifications.
  - [ ] Generate asset manifests and image optimization pipeline configs.
- **Deliverable**: `docs/21-handoff-spec.md`

### Phase 22: Frontend Build
- **Agent**: Code Agent
- **Dependencies**: Phase 21
- **Tasks**:
  - [ ] Construct type-safe routes in TanStack Start with Vite.
  - [ ] Implement responsive components styled via Tailwind CSS v4 design tokens.
  - [ ] Wire client state management, modal dialogs, and route transitions.
- **Deliverable**: `src/routes/*` & `src/components/*`

### Phase 23: Backend & APIs
- **Agent**: Code Agent
- **Dependencies**: Phase 08, Phase 22
- **Tasks**:
  - [ ] Build server functions (`createServerFn`) and API endpoints.
  - [ ] Implement PostgreSQL database schema with Row-Level Security (RLS).
  - [ ] Connect secure user authentication and role-based permissions.
- **Deliverable**: `src/server/*` & Database Schemas

### Phase 24: AI Features
- **Agent**: Code Agent
- **Dependencies**: Phase 23
- **Tasks**:
  - [ ] Integrate `@lovable.dev/ai-gateway` for multi-model synthesis.
  - [ ] Build prompt templates, streaming responses, and fallbacks.
  - [ ] Implement token usage monitoring and error handlers.
- **Deliverable**: `src/lib/prompt.functions.ts`

### Phase 25: Automated Testing
- **Agent**: Code Agent
- **Dependencies**: Phase 22, Phase 23
- **Tasks**:
  - [ ] Write unit tests for utility functions and state reducers with Vitest.
  - [ ] Create integration tests covering critical user routing flows.
  - [ ] Run accessibility testing (`axe-core`) across every route.
- **Deliverable**: `src/test/*`

---

## Cluster 6: QA & Launch Agent (Phases 26 – 30)

### Phase 26: Security Review
- **Agent**: QA & Launch Agent
- **Dependencies**: Phase 23, Phase 25
- **Tasks**:
  - [ ] Audit client bundles to ensure zero secret key or token exposure.
  - [ ] Verify input sanitization and RLS policy enforcement.
  - [ ] Audit dependencies for known vulnerabilities.
- **Deliverable**: `docs/26-security-audit.md`

### Phase 27: Deployment
- **Agent**: QA & Launch Agent
- **Dependencies**: Phase 26
- **Tasks**:
  - [ ] Configure production Edge Worker builds and asset compression.
  - [ ] Set up custom domain, SSL certification, and cache-control headers.
  - [ ] Verify live site availability and error monitoring.
- **Deliverable**: Live Production URL & Deployment Logs

### Phase 28: Analytics
- **Agent**: QA & Launch Agent
- **Dependencies**: Phase 27
- **Tasks**:
  - [ ] Wire privacy-preserving analytics for conversion and drop-off tracking.
  - [ ] Track Core Web Vitals (LCP, FID, CLS) in production.
  - [ ] Establish operational alerting for runtime errors.
- **Deliverable**: `docs/28-analytics-plan.md`

### Phase 29: Learning Loop
- **Agent**: QA & Launch Agent
- **Dependencies**: Phase 28
- **Tasks**:
  - [ ] Collect production telemetry and post-launch user session metrics.
  - [ ] Compare real-world KPI outcomes against Phase 02 targets.
  - [ ] Feed user feedback into agent memory for future sprint cycles.
- **Deliverable**: `docs/29-post-launch-review.md`

### Phase 30: Optimization
- **Agent**: QA & Launch Agent
- **Dependencies**: Phase 29
- **Tasks**:
  - [ ] Conduct performance tuning to reduce bundle size and server latency.
  - [ ] Execute A/B tests on key conversion call-to-actions.
  - [ ] Document lessons learned and update master system architecture.
- **Deliverable**: `docs/30-optimization-report.md`
