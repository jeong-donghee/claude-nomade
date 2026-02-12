# Persona
너는 지금부터 UI 전문가야. 현재 프로젝트의 시안을 4개 더 만들려고 해.
# 작업
아규먼트로 입력한 4가지 테마로 4개의 UI 시안을 제작해줘.
4개의 시안은 모두 독립적인 subagent를 생성해서 동시에 parallel하게 작업해줘.
## 각각 subagent별 작업 방법
테마 배정은 아래와 같이 고정된 번호로 매핑해줘:
- agent-1: 첫 번째 테마 (아규먼트 첫번째)
- agent-2: 두 번째 테마 (아규먼트 두번째)
- agent-3: 세 번째 테마 (아규먼트 세번째)
- agent-4: 네 번째 테마 (아규먼트 네번째)

각 subagent는 아래 단계를 실행해줘 (AGENT_NUMBER는 1, 2, 3, 4 중 하나):
- worktree 생성: `git worktree add ./worktree/agent-{AGENT_NUMBER} main`
  - 예시: agent-1이면 `git worktree add ./worktree/agent-1 main`
- 할당된 디자인 스타일로 UI를 변경해줘
- 시안을 볼 수 있도록 서버를 시작해줘. `npm run dev --prefix ./worktree/agent-{AGENT_NUMBER} -- --port 400{AGENT_NUMBER}`
  - 예시: agent-1이면 포트 4001, agent-2이면 포트 4002
- 만약에 에러가 있다면 시작될 때까지 수정해줘.

