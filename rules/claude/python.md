# Python Rules

Simple, enforceable guidelines. Bias for production readiness over stylistic purity. Linter warnings may be ignored when they harm clarity or velocity—but code must stay robust, typed, and secure.

## Core
1. Correctness > Clarity > Performance (opt only with data).
2. 1 class per file. Always. Split before it grows messy.
3. One responsibility per module. No “utils” dumping ground.
4. Fail fast with clear exceptions; never silently ignore errors.
5. Every new/changed code path must be testable.

## Structure
- File name = snake_case of the class (e.g. `order_service.py` -> `OrderService`).
- Keep files < 600 lines (target < 300).
- No cyclic imports—extract interfaces (Protocols / ABCs) if needed.
- Shared abstractions live in `core/` or `shared/`.

## Naming
- Classes: PascalCase
- Functions / vars: snake_case
- Constants: UPPER_SNAKE_CASE
- Private internals: leading underscore

## Types & Docs
- Full type hints on all function signatures (internal + public).
- Docstring for every public module, class, and function:
  - What it does
  - Key params
  - Return meaning
  - Raises (if non-trivial)

## Imports
- Group: stdlib | third-party | local (blank line between groups).
- No wildcard imports.

## Configuration & Secrets
- Never hard‑code secrets or endpoints.
- Centralize env loading in a single config component.
- Validate required env vars at startup; exit loudly if missing.

## Logging & Observability
- Use structured logging (loguru). No bare `print` (except minimal CLI UX).
- Log key lifecycle steps and failures (no secret values).
- Services expose `/health` (fast, dependency-light) and `/metrics` (Prometheus).

## Errors
- Don’t swallow exceptions. Catch narrow, wrap with context if re‑raising.
- Define a base domain exception (e.g. `DomainError`) and derive specifics.

## Data & Models
- Use `dataclass` / Pydantic for structured payloads at boundaries.
- Validate inputs at edges (API layer, message consumer, CLI).
- Keep serialization separate from domain logic.

## Dependencies
- Add third‑party libs only with justification.
- Pin versions (exact or compatible range) and review periodically.

## Performance
- Measure first (profilers, metrics). Avoid premature optimization.
- Stream large data; avoid loading entire blobs into memory.
- Cache only with explicit invalidation strategy.

## Concurrency
- Use async for I/O, not CPU. Offload heavy CPU work.
- Always set timeouts on network / IPC calls.
- Avoid shared mutable state unless synchronized.

## Security
- Sanitize & validate external input.
- Principle of least privilege for credentials.
- Never log secrets. No `eval` / dynamic `exec`.

## Testing
- Unit tests for public functions/methods (happy + one failure path).
- Deterministic: control time, randomness, network via injection/mocks.
- Fast tests > broad flaky tests. Maintain coverage + meaningful assertions.

## Interfaces & Boundaries
- Wrap external APIs/DBs behind adapter classes (ports/adapters pattern).
- Domain layer must not depend on web framework specifics.

## CLI / Scripts
- Provide `main()` guarded by `if __name__ == "__main__":`.
- Offer `--help` (argparse / typer / click).

## Packaging
- Single version source (e.g. `__version__`).
- LICENSE + README present.
- Reproducible: lock files / hash pins.

## Linting & Formatting
- Ignore *non-critical* style nags if they reduce clarity—document the intentional deviation with a short comment.
- Do NOT ignore type, security, or correctness warnings without rationale.

## Code Review Quick Checklist
- Single responsibility preserved
- Types + docstrings present
- No secret leakage in logs
- Error handling explicit
- Tests updated/passing
- No dead/commented-out code
- Public surface stable or versioned

## Cleanup
- Remove deprecated code within one release after replacement stabilizes.
- Document data/store migrations (`MIGRATIONS.md`).