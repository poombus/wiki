type Props = {
	author?: string;
	time?: string;
	children?: string;
};

function Quote({ author, time, children }: Props) {
	return (
		<table className="cquote">
			<tbody>
				<tr>
					<td style={{ width: "20px", fontSize: "30px", fontFamily: "serif", fontWeight: "bold", textAlign: "center", padding: "3px" }}>
						“
					</td>
					<td style={{ padding: "3px", fontStyle: "italic" }}>
						<center>{children}</center>
					</td>
					<td style={{ width: "20px", fontSize: "30px", fontFamily: "serif", fontWeight: "bold", textAlign: "center", padding: "3px" }}>
						”
					</td>
				</tr>
				<tr>
					<td colSpan={3}>
						<p style={{ fontSize: "smaller", textAlign: "right" }}>
							{author && "-"}
							{author}
							{time && author && ", "}
							{author && time}
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Quote;
