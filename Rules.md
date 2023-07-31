## Conventions

#### 모든 작업내용은 다음과 같은 순서를 통해 계획과 수행이 이루어집니다.

1. GitHub Project에 작업 항목을 추가합니다.
2. 추가한 항목의 Title, Content를 아래 규칛을 참고해 작성한 뒤, `Convert to Issue` 메뉴를 이용해 `GDSC-CAU/GDSC-SPACE` 레포지토리의 Issue로 등록합니다.
3. Fork된 Repository에서 해당 작업에 대한 Branch를 분리하여 작업을 진행합니다. 이 때, Branch 이름과 Commit 메시지의 규칙은 아래 내용을 따릅니다.
4. 작업이 완료되면, `GDSC-CAU/GDSC-SPACE` 레포지토리로 PR을 등록합니다. 마찬가지로 아래 규칙을 참고합니다.
5. Code-Review 이후, 변경 요청사항이 있다면 기존 Branch로 다시 `checkout`하여 작업을 마무리합니다.
6. 마지막에 Approve한 Reviewer가 해당 PR을 Main Branch에 Merge 합니다.

---

### Commit Rule

commit은 각 기능을 반영하는 최소 단위로 작성합니다.

작성방법은 다음과 같습니다.

```bash
git commit -m "TYPE: COMMIT_MESSAGE"
```

| **Type**    | **Usage**                                          |
| ----------- | -------------------------------------------------- |
| `feat`      | add feature                                        |
| `fix`       | fix bug                                            |
| `docs`      | update document                                    |
| `style`     | node code change ex) code formatting, missing semi |
| `refactor`  | refactoring code                                   |
| `test`      | add test code ex) unit test, storybook             |
| `chore`     | update etc, ex) update dependencies                |
| `design`    | update design                                      |
| `rename`    | rename or move file/folder                         |
| `remove`    | remove file/folder                                 |
| `!BREAKING` | critical API changes                               |
| `!HOTFIX`   | hotfix critical bug                                |

#### Commit Example

다음과 같이 작성합니다.

```bash
git commit -m 'feat: add navigation component'
```

```bash
git commit -m 'fix: error of navigation component'
```

```bash
git commit -m 'docs: update README.md'
```

---

### Issue / PR Rule

#### Title

```
[TYPE] TITLE
```

-   TYPE 은 다음 중 하나를 선택합니다.
    -   DEV : 일반적인 개발 사항
    -   FIX : 기존에 개발된 내용을 수정하는 사항
    -   DOC : README 등 문서에 관련된 사항

#### Content

```markdown
## Summary

Summary of Issue or PR

## Description

Detail Description of Issue or PR
```

-   Description 항목이 불필요한 경우에는 생략할 수 있습니다. 단, PR의 경우에는 생략 없이 최대한 상세히 적어주시기 바랍니다.
-   FIX Issue 혹은 UI에 관련된 PR의 경우는, Description에 스크린샷을 첨부해주시기 바랍니다.
-   Issue 작성은 직접 하는것이 아닌, GitHub Project에서 먼저 추가하고, `Convert to Issue` 기능을 이용합니다.
    이 때, 우측 메뉴에서 Assignees와 Label을 지정합니다.
-   PR 작성 시, 우측 메뉴에서 Assignees와 Label, Reviewer을 지정하고, 해당하는 Issue를 Development 항목에 지정해줍니다.

[Issue Example 1](https://github.com/yymin1022/Wa_API/issues/59) /
[Issue Example 2](https://github.com/yymin1022/TaxiMeter/issues/1)

[PR Example 1](https://github.com/DefCon-Apps/Military_License/pull/21) /
[PR Example 2](https://github.com/DefCon-Apps/Military_License/pull/22) /
[PR Example 3](https://github.com/DefCon-Apps/Military_License/pull/24)

---

### Branch Rule

```
TYPE/BRANCH_NAME
```

-   기본적으로 Branch의 이름은 Issue의 이름을 따릅니다.
-   TYPE은 다음 중 하나를 해당하는 Issue의 Type과 동일하게 선택합니다.
    -   dev : 일반적인 개발 사항
    -   fix : 기존에 개발된 내용을 수정하는 사항
    -   doc : README 등 문서에 관련된 사항
-   BRANCH_NAME은 해당하는 Issue의 Title을 적절히 변형합니다.

#### Branch Example

```
dev/base-activity
```

```
docs/readme-base
```

```
fix/login-ui-styling
```
