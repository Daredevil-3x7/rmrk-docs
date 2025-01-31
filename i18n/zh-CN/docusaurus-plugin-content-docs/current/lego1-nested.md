---
title: "嵌套NFT"
---

_嵌套_ NFT的概念是指 NFT 能够 _拥有_ 其他 NFT。

其核心原理很简单：NFT 的所有者不必是外部拥有的账户或智能合约，它也可以是特定的 NFT。

将NFT发送给另一个NFT的过程在功能上与发送给另一个用户相同。从另一个NFT发送 _出去_ NFT的过程将涉及到从拥有 _parent_ NFT的地址发出一笔交易。

一些NFT可以为父子关系配置特殊条件。例如：

- 一些父NFT将允许子NFT的所有者随时撤走子NFT（例如包含角色的虚拟土地）
- 一些父NFT将被禁止对子NFT执行某些交互（例如，房子的主人不应该能够BURN掉别人在这个房子里作为客人身份的角色......大概吧）
- 一些父 NFT 会有特殊的抽离条件，比如接受音乐stems的音乐 NFT。这些stems可以被它们的所有者移除，直到一定数量的共同作曲者足够支持一个stem，或者直到父音乐曲目的所有者密封并“发布”它

嵌套NFT 的概念也在[可装备性](/lego25-equippable)的概念上进一步扩展。

## 实现

下面的实现将直接指向代码。有关如何使用它们来铸造您自己的 NFT 的示例，请参阅侧边栏中每个子类型实现的章节。

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#children)
- [EVM](https://github.com/rmrk-team/evm/blob/master/contracts/RMRK/RMRKNestable.sol)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)