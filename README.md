# SMTech RTS-SM

Стратегия в реальном времени для Windows: СМГрад, Гнильбург и ZГрад.

- [Страница игры](https://paxsarmata.github.io/RTS-SM/)
- [Последний релиз](https://github.com/paxsarmata/RTS-SM/releases/latest)

В 4.0: «Реализм-СМ», ЗСУ с ракетами и пушками, самоходная дальнобойная артиллерия, новый Су-25, камуфляж, ограничение наложения звуков и обновление через GitHub.

## Публикация

Статика находится в `docs/`. В Settings → Pages выбрать GitHub Actions; workflow `.github/workflows/pages.yml` публикует её после записи в main.

Для каждой версии прикладывать к GitHub Release: `SMTech_RTS-SM_v<версия>_Windows.zip` и `update.json` с точными version, downloadUrl, sha256 и size. Версию внутри игры и манифеста повышать одновременно. Не добавлять ZIP игры в Git-историю: он должен быть только asset релиза.
