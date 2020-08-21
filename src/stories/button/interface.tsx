import React,{ReactNode,AnchorHTMLAttributes,ButtonHTMLAttributes}from "react"
import { SizesTypes, AppearancesTypes } from "./types"
export interface CustormButtonProps {
	/** 是否禁用 */
	disabled?: boolean;
	/** 是否加载中 */
	isLoading?: boolean;
	/** 是否是a标签 */
	isLink?: boolean;
	/** 是否替换加载中文本 */
	loadingText?: ReactNode;
	/** 按钮大小 */
	size?: SizesTypes;
	/** 按钮类型 */
	appearance?: AppearancesTypes;
	/** 无效点击 */
	isUnclickable?: boolean;
}

export type ButtonProps = CustormButtonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> &
	ButtonHTMLAttributes<HTMLButtonElement>;