import { GridContent } from '../../components/GridContent';

export const NotFound = () => {
	return (
		<GridContent
			title="Error 404"
			html={`
				<p>
					A página que você busca não foi encontradata.
					<a href="/">Clique aqui para voltar à home</a>
				</p>`}
		/>
	);
};
